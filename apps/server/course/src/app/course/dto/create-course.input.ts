import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCourseInput {
  @Field()
  title: string;
  grades: string[];
  teachers: any[];
  students: any[];
  startAt: Date;
  endAt: Date;
}
