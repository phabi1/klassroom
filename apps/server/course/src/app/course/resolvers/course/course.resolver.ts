import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { CourseService } from '../../services/course/course.service';
import { Course } from '../../types/course.type';

@Resolver()
export class CourseResolver {
  constructor(private readonly courseService: CourseService) {}

  @Query(() => Course)
  course(@Args('id', {type: () => ID}) id: string) {
    return this.courseService.findById(id);
  }
}
