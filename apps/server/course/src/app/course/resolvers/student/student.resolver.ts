import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from '../../dto/create-student.input';
import { StudentService } from '../../services/student/student.service';
import { Student } from '../../types/student.type';

@Resolver()
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => [Student])
  students(@Args('course', { type: () => ID }) course: string) {
    return this.studentService.findByCourse(course);
  }

  @Query(() => Student)
  student(@Args('id', { type: () => ID }) id: string) {
    return this.studentService.findById(id);
  }

  @Mutation(() => Student)
  createStudent(@Args('input') input: CreateStudentInput) {
    return this.studentService.create(input);
  }
}
