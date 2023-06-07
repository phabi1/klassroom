import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MemberEntity } from './member.entity';

@Schema({ toJSON: { virtuals: true } })
export class TeacherEntity extends MemberEntity {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;
}

export const TeacherSchema = SchemaFactory.createForClass(TeacherEntity);