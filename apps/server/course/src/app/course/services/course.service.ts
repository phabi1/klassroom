import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourseEntity } from '../entities/course.entity';
import { CreateCourseInput } from '../dto/create-course.input';

@Injectable()
export class CourseService {

    constructor(@InjectModel('Course') private readonly model: Model<CourseEntity>) { }

    async create(input: CreateCourseInput) {
        const entity = new this.model();
        entity.title = input.title;
        await entity.save();
        return entity;
    }
}
