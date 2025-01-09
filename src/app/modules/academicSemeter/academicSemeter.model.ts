import { model, Schema } from "mongoose";
import { TAcademicSemeter } from "./academicSemeter.interface";
import {
  AcademicSemeterCode,
  AcademicSemeterName,
  Months,
} from "./academicSemeter.constant";

const academicSemeterSchema = new Schema<TAcademicSemeter>(
  {
    name: { type: String, required: true, enum: AcademicSemeterName },
    year: { type: String, required: true },
    code: { type: String, required: true, enum: AcademicSemeterCode },
    startMonth: { type: String, required: true, enum: Months },
    endMonth: { type: String, required: true, enum: Months },
  },
  { timestamps: true }
);
academicSemeterSchema.pre("save", async function (next) {
  const isSemesterExists = await AcademicSemeter.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new Error("This semester is already exists");
  }
  next();
});
export const AcademicSemeter = model<TAcademicSemeter>(
  "AcademicSemester",
  academicSemeterSchema
);
