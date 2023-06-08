import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field({ nullable: true })
  shortname: string;

  @Field({ nullable: true })
  birthday: Date;

  @Field({ nullable: true })
  cover: string;

  @Field({ nullable: true })
  sex: string;

  @Field(() => ID)
  grade: string;

  @Field(() => ID)
  course: string;

  @Field({ nullable: true })
  user: string;
}
