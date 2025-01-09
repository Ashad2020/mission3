import { AcademicSemesterNameCodeMapper } from "./academicSemeter.constant";
import { TAcademicSemeter } from "./academicSemeter.interface";
import { AcademicSemeter } from "./academicSemeter.model";

const CreateAcademicSemesterIntoDB = async (payload: TAcademicSemeter) => {
  // semester name -> semester code

  if (AcademicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid semester code");
  }
  const result = await AcademicSemeter.create(payload);
  return result;
};
const GetAllAcademicSemesterFromDb = async () => {
  const result = await AcademicSemeter.find();
  return result;
};
const GetSingleAcademicSemesterFromDb = async (id: string) => {
  const result = await AcademicSemeter.findById(id);
  return result;
};
const UpdateSingleAcademicSemesterIntoDb = async (
  id: string,
  payload: Partial<TAcademicSemeter>
) => {
  if (
    payload.name &&
    payload.code &&
    AcademicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error("Invalid semester Code");
  }
  //ei logic e vul ase must be
  // if (
  //   payload.name &&
  //   payload.code &&
  //   AcademicSemesterNameCodeMapper[payload.name] !== payload.code
  // ) {
  //   throw new Error("Invalid semester Code");
  // }
  const result = await AcademicSemeter.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemesterServices = {
  CreateAcademicSemesterIntoDB,
  GetAllAcademicSemesterFromDb,
  GetSingleAcademicSemesterFromDb,
  UpdateSingleAcademicSemesterIntoDb,
};
