import { createUnionType } from "@nestjs/graphql";
import { ParentSpace } from "./parent-space";
import { StudentSpace } from "./student-space";
import { TeacherSpace } from "./teacher-space";

export const Space = createUnionType({ name: 'Space', types: () => [TeacherSpace, StudentSpace, ParentSpace] })