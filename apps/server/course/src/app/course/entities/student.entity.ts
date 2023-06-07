import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { GradeEntity } from '../../grade/entities/grade.entity';
import { MemberEntity } from './member.entity';
import { Field, ObjectType } from '@nestjs/graphql';

export type StudentDocument = StudentEntity & Document;

@ObjectType('Student')
@Schema({ toJSON: { virtuals: true } })
export class StudentEntity extends MemberEntity {
  @Field()
  @Prop()
  firstname: string;
  @Field()
  @Prop()
  lastname: string;

  @Field({ nullable: true })
  @Prop()
  shortname: string;

  @Field({ nullable: true })
  @Prop()
  birthday: Date;

  @Field()
  @Prop()
  sex: string;

  @Field(() => GradeEntity)
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Grade' })
  grade: GradeEntity;

  @Field({ nullable: true })
  @Prop()
  cover: string;
}

export const StudentSchema = SchemaFactory.createForClass(StudentEntity);
