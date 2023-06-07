import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ParentSpaceEntity {
    @Prop({ required: true })
    course: string;

    @Prop({ required: true })
    student: string;

    @Prop({ required: true })
    parent: string;
}

export const ParentSpaceSchema = SchemaFactory.createForClass(ParentSpaceEntity)