import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Grade } from '../../grade/types/grade.type';

@ObjectType()
export class Course {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => [Grade])
  grades: Grade[];
}
