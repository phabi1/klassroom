import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseController } from './controllers/course/course.controller';
import { CourseSchema } from './entities/course.entity';
import { MemberSchema } from './entities/member.entity';
import { StudentSchema } from './entities/student.entity';
import { TeacherSchema } from './entities/teacher.entity';
import { RESOLVERS } from './resolvers';
import { CourseService } from './services/course/course.service';
import { StudentService } from './services/student/student.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Course', schema: CourseSchema },
      {
        name: 'Member',
        schema: MemberSchema,
        discriminators: [
          { name: 'Student', schema: StudentSchema },
          { name: 'Teacher', schema: TeacherSchema },
        ],
      },
    ]),
  ],
  providers: [...RESOLVERS, CourseService, StudentService],
  controllers: [CourseController],
})
export class CourseModule {}
