import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Student } from '../models/student.model';
import { StudentActions } from '../actions/student.actions';

export const spaceTeacherStudentsFeatureKey = 'spaceTeacherStudents';

export interface State extends EntityState<Student> {
  loading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Student> = createEntityAdapter<Student>();

export const initialState: State = adapter.getInitialState({
  loading: false,
  error: null,
});

export const reducer = createReducer(
  initialState,

  on(StudentActions.loadStudents, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(StudentActions.loadStudentsSuccess, (state, action) => ({
    ...adapter.setAll(action.students, state),
    loading: false,
  })),
  on(StudentActions.loadStudentsFailure, (state, action) => ({
    ...state,
    loading: false,
    erorr: action.error,
  }))
);
