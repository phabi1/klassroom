import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTeacherSpaceInput {
  @Field({ description: 'Title of space' })
  title: string;
}
