import { z } from "zod";

// UserName Schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, { message: "First name must not exceed 20 characters" })
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      { message: "First name must be in capitalize format" }
    ),
  midleName: z.string().trim().optional(),
  lastName: z.string().refine((value) => /^[A-Za-z]+$/.test(value), {
    message: "Last name must contain only alphabets",
  }),
});

// Guardian Schema
const guardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOcupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOcupation: z.string(),
  motherContactNo: z.string(),
});

// Local Guardian Schema
const localGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

// Main Student Schema
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(["male", "female", "other"], {
        errorMap: () => ({ message: "Invalid gender" }),
      }),
      dateOfBirth: z.string().optional(),
      email: z.string().email({ message: "Invalid email address" }),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z
        .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
        .optional(),
      presentAddress: z.string(),
      parmanentAddress: z.string(),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      addmissionSemester: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});
// Export the main schema
export const studentValidationSchemas = {
  createStudentValidationSchema,
};

// Example usage
// const validationResult = StudentSchema.safeParse(data);
// if (!validationResult.success) {
//   console.log(validationResult.error.format());
// }
