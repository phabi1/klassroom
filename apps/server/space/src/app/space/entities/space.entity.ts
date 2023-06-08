import { Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ discriminatorKey: 'type' })
export class SpaceEntity {
  @Field(() => ID)
  id: string;

  type: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  user: string;
}

export const SpaceSchema = SchemaFactory.createForClass(SpaceEntity);