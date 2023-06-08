import { Field, ObjectType } from '@nestjs/graphql';
import { ISpace } from './ispace.type';

@ObjectType({
  implements: () => [ISpace],
})
export class ParentSpace implements ISpace {
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
