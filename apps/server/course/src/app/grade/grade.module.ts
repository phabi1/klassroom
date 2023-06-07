import { Module } from '@nestjs/common';
import { GradeResolver } from './resolvers/grade.resolver';
import { GradeService } from './services/grade.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GradeSchema } from './entities/grade.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Grade', schema: GradeSchema }]),
  ],
  providers: [GradeResolver, GradeService],
})
export class GradeModule {}
