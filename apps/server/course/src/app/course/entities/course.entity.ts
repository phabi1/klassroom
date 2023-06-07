import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { GradeEntity } from '../../grade/entities/grade.entity';
import { StudentEntity } from './student.entity';
import { TeacherEntity } from './teacher.entity';
import { Field, ObjectType } from '@nestjs/graphql';

export type CourseDocument = CourseEntity & Document;

ObjectType('Course');
@Schema({ timestamps: true, toJSON: { virtuals: true } })
export class CourseEntity {
  @Field()
  id: string;

  @Field()
  @Prop()
  title: string;
  @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: 'Grade' }], default: [] })
  grades: GradeEntity[];
  @Prop({ default: [] })
  teachers: TeacherEntity[];
  @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: 'Student' }], default: [] })
  students: StudentEntity[];
  @Prop()
  startAt: Date;
  @Prop()
  endAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export const CourseSchema = SchemaFactory.createForClass(CourseEntity);
