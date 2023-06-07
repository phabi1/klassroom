import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SpaceEntity } from "./space.entity";

@Schema()
@ObjectType('StudentSpace')
export class StudentSpaceEntity extends SpaceEntity {
    @Prop({ required: true })
    @Field()
    course: string;

    @Prop({ required: true })
    @Field()
    student: string;
}

export const StudentSpaceSchema = SchemaFactory.createForClass(StudentSpaceEntity);