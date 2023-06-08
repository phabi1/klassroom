import { CurrentUser } from '@klassroom/server/auth';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateParentSpaceInput } from '../dto/create-parent-space.input';
import { CreateStudentSpaceInput } from '../dto/create-student-space.input';
import { CreateTeacherSpaceInput } from '../dto/create-teacher-space.input';
import { UpdateSpaceInput } from '../dto/update-space.input';
import { SpaceService } from '../services/space.service';
import { ParentSpace } from '../types/parent-space';
import { Space } from '../types/space.type';
import { StudentSpace } from '../types/student-space';
import { TeacherSpace } from '../types/teacher-space';
import { ForbiddenException } from '@nestjs/common';

@Resolver()
export class SpaceResolver {
  constructor(private readonly spaceService: SpaceService) { }

  @Mutation(() => TeacherSpace)
  createTeacherSpace(@Args('input') input: CreateTeacherSpaceInput, @CurrentUser() user: string) {
    return this.spaceService.createTeacher(input);
  }

  @Mutation(() => StudentSpace)
  createStudentSpace(@Args('input') input: CreateStudentSpaceInput, @CurrentUser() user: string) {
    return this.spaceService.createStudent(input);
  }

  @Mutation(() => ParentSpace)
  createParentSpace(@Args('input') input: CreateParentSpaceInput, @CurrentUser() user: string) {
    return this.spaceService.createParent(input);
  }

  @Query(() => [Space], { name: 'spaces' })
  findAll(@CurrentUser() user: string) {
    return this.spaceService.findByUser(user);
  }

  @Query(() => Space, { name: 'space' })
  async findOne(@Args('id', { type: () => ID }) id: string, @CurrentUser() user: string) {
    const space = await this.spaceService.findOne(id);
    if (space.user !== user) {
      throw new ForbiddenException();
    }
    return space;
  }

  @Mutation(() => Space)
  async updateSpace(@Args('id', { type: () => ID }) id: string, @Args('input') input: UpdateSpaceInput, @CurrentUser() user: string) {
    const space = await this.spaceService.findOne(id);
    if (space.user !== user) {
      throw new ForbiddenException();
    }
    return this.spaceService.update(id, input);
  }

  @Mutation(() => Space)
  removeSpace(@Args('id', { type: () => ID }) id: string) {
    return this.spaceService.remove(id);
  }
}
