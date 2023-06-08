import { Update } from '@ngrx/entity';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateStudentInput } from '../models/create-student-input.model';
import { Student } from '../models/student.model';

export const StudentActions = createActionGroup({
  source: 'Student/API',
  events: {
    'Load Students': emptyProps(),
    'Load Students Success': props<{ students: Student[] }>(),
    'Load Students Failure': props<{ error: string }>(),
    'Load Student Details': props<{ id: string }>(),
    'Load Student Details Success': props<{ student: Student }>(),
    'Load Student Details Failure': props<{ error: string }>(),
    'Add Student': props<{ data: CreateStudentInput }>(),
    'Add Student Success': props<{ student: Student }>(),
    'Add Student Failure': props<{ error: string }>(),
    'Update Student': props<{ student: Update<Student> }>(),
    'Delete Student': props<{ id: string }>(),
    'Clear Students': emptyProps(),
  }
});
