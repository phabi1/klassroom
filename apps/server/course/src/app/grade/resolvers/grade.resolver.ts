import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateGradeInput } from '../dto/create-grade.input';
import { UpdateGradeInput } from '../dto/update-grade.input';
import { GradeEntity } from '../entities/grade.entity';
import { GradeService } from '../services/grade.service';
import { Grade } from '../types/grade.type';

@Resolver(() => Grade)
export class GradeResolver {
  constructor(private readonly gradeService: GradeService) {}

  @Mutation(() => Grade)
  createGrade(@Args('input') createGradeInput: CreateGradeInput) {
    return this.gradeService.create(createGradeInput);
  }

  @Query(() => [Grade], { name: 'grades' })
  findAll() {
    return this.gradeService.findAll();
  }

  @Query(() => Grade, { name: 'grade' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.gradeService.findOne(id);
  }

  @Mutation(() => Grade)
  updateGrade(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') updateGradeInput: UpdateGradeInput
  ) {
    return this.gradeService.update(id, updateGradeInput);
  }

  @Mutation(() => Grade)
  removeGrade(@Args('id', { type: () => ID }) id: string) {
    return this.gradeService.remove(id);
  }
}
