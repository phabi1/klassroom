import { Field, ID, InterfaceType, Parent, ResolveField } from '@nestjs/graphql';

@InterfaceType()
export abstract class ISpace {
  @Field(() => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  user: string;
}
