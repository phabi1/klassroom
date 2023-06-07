import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Grade {
  @Field(() => ID)
  id: string;

  @Field()
  name: number;

  @Field()
  title: string;
}
