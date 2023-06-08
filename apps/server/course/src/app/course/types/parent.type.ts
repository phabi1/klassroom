import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Parent {
    @Field(() => ID)
    id: string;

    @Field()
    firstname: string;

    @Field()
    lastname: string;

    @Field()
    role: string;
}