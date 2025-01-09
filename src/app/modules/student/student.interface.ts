import { Model, Types } from "mongoose";

export type TGuardian = {
  fatherName: string;
  fatherOcupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOcupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type TUserName = {
  firstName: string;
  midleName?: string;
  lastName: string;
};
export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: TUserName;
  gender: "male" | "female" | "other";
  dateOfBirth?: Date;
  contactNo: string;
  email: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  parmanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  addmissionSemester: Types.ObjectId;
  isDeleted: boolean;
};
// creating static
export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}

// creating instace methods type

// export type TStudentMethods = {
//   isUserExist(id: string): Promise<TStudent | null>;
// };

// export type TStudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   TStudentMethods
// >;
