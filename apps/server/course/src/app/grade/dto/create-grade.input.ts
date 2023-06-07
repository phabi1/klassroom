import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateGradeInput {
  @Field()
  name: string;
  @Field()
  title: string;
}
