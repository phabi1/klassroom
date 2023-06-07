import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Space } from './space.type';

@ObjectType({
  implements: () => [Space],
})
export class ParentSpace implements Space {
  id: string;
  title: string;

  @Field()
  course: string;

  user: string;

  @Field()
  student: string;

  @Field()
  parent: string;
}
