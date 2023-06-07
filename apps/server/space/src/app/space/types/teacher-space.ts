import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TeacherSpace {
    @Field(() => ID)
    id: string;

    @Field()
    title: string;

    @Field()
    course: string;

    @Field()
    user: string;
}