export interface CreateStudentInput {
    firstname: string;
    lastname: string;
    sex: string;
    grade: string;
    birthday?: Date;
    course: string;
}