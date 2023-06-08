import { createUnionType } from '@nestjs/graphql';
import { TeacherSpace } from './teacher-space';
import { StudentSpace } from './student-space';
import { ParentSpace } from './parent-space';

export const Space = createUnionType({
  name: 'Space',
  types: () => [TeacherSpace, StudentSpace, ParentSpace],
  resolveType: (space) => {
    switch (space.type) {
      case 'Teacher':
        return TeacherSpace;
      case 'Student':
        return StudentSpace;
      case 'Parent':
        return ParentSpace;
    }
  },
});
