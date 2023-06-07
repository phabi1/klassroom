import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SpaceEntity } from "./space.entity";

@Schema()
export class StudentSpaceEntity extends SpaceEntity {
    @Prop({ required: true })
    course: string;

    @Prop({ required: true })
    student: string;
}

export const StudentSpaceSchema = SchemaFactory.createForClass(StudentSpaceEntity);