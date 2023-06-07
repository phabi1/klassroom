import { Resolver } from '@nestjs/graphql';
import { CourseService } from '../services/course.service';

@Resolver()
export class CourseResolver {
  constructor(private readonly courseService: CourseService) {}
}
