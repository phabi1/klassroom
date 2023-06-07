import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { CourseEntity } from './course.entity';
import { Field } from '@nestjs/graphql';

@Schema()
export class MemberEntity {
  @Field()
  id: string;

  @Field(() => CourseEntity)
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Course' })
  course: CourseEntity;

  @Field({ nullable: true })
  @Prop()
  user: string;
}

export const MemberSchema = SchemaFactory.createForClass(MemberEntity);

MemberSchema.index({ course: 1 });
