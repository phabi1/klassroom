import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateParentSpaceInput {
  @Field({ description: 'Title of space' })
  title: string;
}
