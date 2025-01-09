export type TMonths =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";
export type TAcademicSemeterName = "Autumn" | "Summer" | "Fall";
export type TAcademicSemeterCode = "01" | "02" | "03";
export type TAcademicSemeter = {
  name: TAcademicSemeterName;
  code: TAcademicSemeterCode;
  year: string;
  startMonth: TMonths;
  endMonth: TMonths;
};

export type TAcademicSemesterNameCodeMapper = {
  [key: string]: string;
};
