import config from "../../config";
import { TStudent } from "../student/student.interface";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { Student } from "../student/student.model";

import { AcademicSemeter } from "../academicSemeter/academicSemeter.model";
import { generateStudentId } from "./user.utils";
import { TAcademicSemeter } from "../academicSemeter/academicSemeter.interface";

const createStudentIntoDb = async (password: string, payload: TStudent) => {
  //create a user object
  const userData: Partial<TUser> = {};
  //if password don't given, user default password
  userData.password = password || (config.default_password as string);

  //set role into user object
  userData.role = "student";

  // find academic semester info
  const addmissionSemester = await AcademicSemeter.findById(
    payload.addmissionSemester
  );
  //set manually generated id
  userData.id = await generateStudentId(addmissionSemester as TAcademicSemeter);
  //create a user
  const newUser = await User.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    payload.id = newUser.id;
    payload.user = newUser._id;
    const newStudent = await Student.create(payload);
    return newStudent;
  }
};
export const userServices = {
  createStudentIntoDb,
};
