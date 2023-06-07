import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStudentSpaceInput {
  @Field({ description: 'Title of space' })
  title: string;
}
