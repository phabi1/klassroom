import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Grade } from '../../grade/types/grade.type';

@ObjectType()
export class Student {
  @Field(() => ID)
  id: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field({ nullable: true })
  shortname: string;

  @Field({ nullable: true })
  birthday: Date;

  @Field()
  sex: string;

  @Field(() => Grade)
  grade: Grade;

  @Field({ nullable: true })
  cover: string;
}
