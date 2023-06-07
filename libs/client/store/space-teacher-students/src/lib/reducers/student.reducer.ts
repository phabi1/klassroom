import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Student } from '../models/student.model';
import { StudentActions } from '../actions/student.actions';

export const studentsFeatureKey = 'students';

export interface State extends EntityState<Student> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Student> = createEntityAdapter<Student>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(StudentActions.addStudent,
    (state, action) => adapter.addOne(action.student, state)
  ),
  on(StudentActions.upsertStudent,
    (state, action) => adapter.upsertOne(action.student, state)
  ),
  on(StudentActions.addStudents,
    (state, action) => adapter.addMany(action.students, state)
  ),
  on(StudentActions.upsertStudents,
    (state, action) => adapter.upsertMany(action.students, state)
  ),
  on(StudentActions.updateStudent,
    (state, action) => adapter.updateOne(action.student, state)
  ),
  on(StudentActions.updateStudents,
    (state, action) => adapter.updateMany(action.students, state)
  ),
  on(StudentActions.deleteStudent,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(StudentActions.deleteStudents,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(StudentActions.loadStudents,
    (state, action) => adapter.setAll(action.students, state)
  ),
  on(StudentActions.clearStudents,
    state => adapter.removeAll(state)
  ),
);

export const studentsFeature = createFeature({
  name: studentsFeatureKey,
  reducer,
  extraSelectors: ({ selectStudentsState }) => ({
    ...adapter.getSelectors(selectStudentsState)
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = studentsFeature;
