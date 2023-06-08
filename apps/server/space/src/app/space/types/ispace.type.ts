import { Field, ID, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class ISpace {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  user: string;
}
