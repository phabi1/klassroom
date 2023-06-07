import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGradeInput } from '../dto/create-grade.input';
import { UpdateGradeInput } from '../dto/update-grade.input';
import { GradeDocument } from '../entities/grade.entity';

@Injectable()
export class GradeService {
  constructor(
    @InjectModel('Grade') private readonly model: Model<GradeDocument>
  ) {}

  async create(input: CreateGradeInput) {
    const entity = new this.model();
    this.buildEntityWithData(entity, input);
    await entity.save();
    return entity;
  }

  async findAll() {
    return this.model.find();
  }

  async findOne(id: string) {
    const entity = this.model.findById(id);
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }

  async update(id: string, input: UpdateGradeInput) {
    const entity = await this.model.findById(id);
    if (!entity) {
      throw new NotFoundException();
    }
    this.buildEntityWithData(entity, input);
    await entity.save();
    return entity;
  }

  async remove(id: string) {
    const entity = await this.model.findByIdAndDelete(id);
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }

  private buildEntityWithData(entity, data) {
    Object.keys(data).forEach((prop) => entity.set(prop, data));
  }
}
