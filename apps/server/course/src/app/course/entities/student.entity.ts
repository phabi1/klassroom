import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { GradeEntity } from '../../grade/entities/grade.entity';
import { MemberEntity } from './member.entity';
import { ParentEntity, ParentSchema } from './parent.entity';

export type StudentDocument = StudentEntity & Document;

@Schema({ toJSON: { virtuals: true } })
export class StudentEntity extends MemberEntity {

  @Prop()
  firstname: string;


  @Prop()
  lastname: string;


  @Prop()
  shortname: string;


  @Prop()
  birthday: Date;


  @Prop({ default: 'unknow' })
  sex: string;


  @Prop({ type: SchemaTypes.ObjectId, ref: 'Grade' })
  grade: GradeEntity;


  @Prop()
  cover: string;

  @Prop({ type: [{ type: ParentSchema }] })
  parents: ParentEntity[];
}

export const StudentSchema = SchemaFactory.createForClass(StudentEntity);
