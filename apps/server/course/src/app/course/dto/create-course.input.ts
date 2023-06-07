export class CreateCourseInput {
    title: string;
    grades: string[];
    teachers: any[];
    students: any[];
    startAt: Date;
    endAt: Date;
}