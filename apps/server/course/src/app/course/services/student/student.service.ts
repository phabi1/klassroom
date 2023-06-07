import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentInput } from '../../dto/create-student.input';
import { CourseDocument } from '../../entities/course.entity';
import { StudentDocument } from '../../entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student') private readonly model: Model<StudentDocument>,
    @InjectModel('Course') private readonly courseModel: Model<CourseDocument>
  ) {}

  async findByCourse(course: string) {
    return this.model.find({ course });
  }

  async findById(id: string) {
    return this.model.findById(id);
  }

  async create(input: CreateStudentInput) {
    const entity = new this.model(input);
    await entity.save();
    await this.courseModel.findByIdAndUpdate(input.course, {
      $addToSet: { students: entity._id },
    });
    return entity;
  }
}
