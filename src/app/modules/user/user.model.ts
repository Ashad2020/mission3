import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import config from "../../config";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    id: { type: String, required: true },
    password: {
      type: String,
      required: [true, "Password is required"],
      maxlength: [20, "Maxlength 20"],
    },
    needsPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: ["student", "admin", "faculty"] },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      default: "in-progress",
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// pre hook, will work on create and save method
userSchema.pre("save", async function (next) {
  // console.log(this, "Pre hook, We will save the data");
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.BCRYPT_SALT));
  next();
});
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});
export const User = model<TUser>("User", userSchema);
