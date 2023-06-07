import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GradeDocument = GradeEntity & Document;

@ObjectType()
@Schema({ timestamps: true, toJSON: { virtuals: true } })
export class GradeEntity {
  id: string;

  @Prop({ required: true, unique: true })
  @Field()
  name: number;

  @Prop({ required: true })
  @Field()
  title: string;
}

export const GradeSchema = SchemaFactory.createForClass(GradeEntity);
