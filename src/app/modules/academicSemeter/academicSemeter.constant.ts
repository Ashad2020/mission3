import {
  TAcademicSemesterNameCodeMapper,
  TAcademicSemeterCode,
  TAcademicSemeterName,
  TMonths,
} from "./academicSemeter.interface";

export const Months: TMonths[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const AcademicSemeterName: TAcademicSemeterName[] = [
  "Autumn",
  "Summer",
  "Fall",
];
export const AcademicSemeterCode: TAcademicSemeterCode[] = ["01", "02", "03"];
export const AcademicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
  Autumn: "01",
  Summer: "02",
  Fall: "03",
};
