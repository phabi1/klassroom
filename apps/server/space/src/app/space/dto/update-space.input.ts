import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateSpaceInput {
    @Field({ nullable: true })
    title: string;
}