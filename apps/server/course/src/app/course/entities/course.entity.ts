import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes } from "mongoose";

@Schema({ timestamps: true, toJSON: { virtuals: true } })
export class CourseEntity {
    @Prop()
    title: string;
    @Prop({ type: [SchemaTypes.ObjectId], default: [] })
    grades: any[];
    @Prop({ default: [] })
    teachers: any[];
    @Prop({ default: [] })
    students: any[];
    @Prop()
    startAt: Date;
    @Prop()
    endAt: Date;
    createdAt: Date;
    updatedAt: Date;
}

export const CourseSchema = SchemaFactory.createForClass(CourseEntity); 