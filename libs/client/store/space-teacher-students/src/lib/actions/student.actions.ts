import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Student } from '../models/student.model';

export const StudentActions = createActionGroup({
  source: 'Student/API',
  events: {
    'Load Students': emptyProps(),
    'Load Students Success': props<{ students: Student[] }>(),
    'Load Students Failure': props<{ error: string }>(),
    'Add Student': props<{ student: Student }>(),
    'Upsert Student': props<{ student: Student }>(),
    'Add Students': props<{ student: Student[] }>(),
    'Upsert Students': props<{ student: Student[] }>(),
    'Update Student': props<{ student: Update<Student> }>(),
    'Update Students': props<{ students: Update<Student>[] }>(),
    'Delete Student': props<{ id: string }>(),
    'Delete Students': props<{ ids: string[] }>(),
    'Clear Students': emptyProps(),
  }
});
