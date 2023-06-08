import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ParentEntity {
    @Prop()
    firstname: string;

    @Prop()
    lastname: string;

    @Prop()
    role: string;
}

export const ParentSchema = SchemaFactory.createForClass(ParentEntity);