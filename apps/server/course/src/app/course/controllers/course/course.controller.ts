import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateCourseInput } from '../../dto/create-course.input';
import { CourseService } from '../../services/course.service';

@Controller()
export class CourseController {

    constructor(private readonly courseService: CourseService) { }

    @MessagePattern('createCourse')
    create(@Payload() payload: CreateCourseInput) {
        return this.courseService.create(payload);
    }
}
