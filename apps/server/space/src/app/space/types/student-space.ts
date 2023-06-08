import { Field, ObjectType } from '@nestjs/graphql';
import { ISpace } from './ispace.type';

@ObjectType({
  implements: () => [ISpace],
})
export class StudentSpace implements ISpace {
  id: string;

  title: string;
  
  type: string;

  @Field()
  course: string;

  user: string;

  @Field()
  student: string;
}
