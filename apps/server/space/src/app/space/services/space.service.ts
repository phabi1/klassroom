import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateParentSpaceInput } from '../dto/create-parent-space.input';
import { CreateStudentSpaceInput } from '../dto/create-student-space.input';
import { CreateTeacherSpaceInput } from '../dto/create-teacher-space.input';
import { UpdateSpaceInput } from '../dto/update-space.input';
import { SpaceEntity } from '../entities/space.entity';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class SpaceService {

  constructor(
    @InjectModel('Space') private readonly model: Model<SpaceEntity>,
    @Inject('course') private readonly courseClient: ClientProxy
  ) { }

  async createParent(input: CreateParentSpaceInput) {
    const model = this.model.discriminators['Parent'];
    const space = new model();
    Object.keys(input).forEach(prop => space.set(prop, input[prop]))
    await space.save();
    return space;
  }

  async createStudent(input: CreateStudentSpaceInput) {
    const model = this.model.discriminators['Student'];
    const space = new model();
    Object.keys(input).forEach(prop => space.set(prop, input[prop]))
    await space.save();
    return space;
  }

  async createTeacher(input: CreateTeacherSpaceInput) {

    const course = await lastValueFrom(this.courseClient.send('createCourse', { title: input.title }));

    const model = this.model.discriminators['Teacher'];
    const space = new model();
    Object.keys(input).forEach(prop => space.set(prop, input[prop]));
    space.course = course.id;
    await space.save();
    return space;
  }

  findAll(): Promise<SpaceEntity[]> {
    return this.model.find();
  }

  findByUser(user: string): Promise<SpaceEntity[]> {
    return this.model.find({ user });
  }

  findOne(id: string): Promise<SpaceEntity> {
    return this.model.findById(id);
  }

  update(id: string, updateSpaceInput: UpdateSpaceInput) {
    throw new Error('Method not implemented.');
  }

  remove(id: string) {
    throw new Error('Method not implemented.');
  }
}
