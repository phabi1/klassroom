import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseController } from './controllers/course/course.controller';
import { CourseSchema } from './entities/course.entity';
import { CourseResolver } from './resolvers/course.resolver';
import { CourseService } from './services/course.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Course', schema: CourseSchema }]),
  ],
  providers: [CourseResolver, CourseService],
  controllers: [CourseController],
})
export class CourseModule {}
