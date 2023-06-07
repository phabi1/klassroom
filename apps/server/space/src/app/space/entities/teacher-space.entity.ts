import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class TeacherSpaceEntity {
    title: string;
    user: string;

    @Prop({ required: true })
    course: string;
}

export const TeacherSpaceSchema = SchemaFactory.createForClass(TeacherSpaceEntity);