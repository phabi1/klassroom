import { Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class SpaceEntity {
  @Field(() => ID)
  id: string;

  @Prop({ required: true })
  @Field({ description: 'Title of space' })
  title: string;

  @Prop()
  @Field({ nullable: true })
  user: string;
}

export const SpaceSchema = SchemaFactory.createForClass(SpaceEntity);