import { Grade } from "./grade.model";
import { Parent } from "./parent.model";

export interface Student {
  id: string;
  firstname: string;
  lastname: string;
  shortname: string;
  birthday: string;
  sex: string;
  avatar: string;
  grade: Grade;
  course: string;
  parents: Parent[]
}
