import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ParentSpace {
    @Field(() => ID)
    id: string;

    @Field()
    title: string;

    @Field()
    course: string;

    @Field()
    user: string;

    @Field()
    student: string;

    @Field()
    parent: string;
}