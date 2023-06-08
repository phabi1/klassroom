import { createFeature, createSelector } from '@ngrx/store';
import {
  adapter,
  reducer,
  spaceTeacherStudentsFeatureKey,
} from '../reducers/student.reducer';

export const spaceTeacherStudentsFeature = createFeature({
  name: spaceTeacherStudentsFeatureKey,
  reducer,
  extraSelectors: ({ selectSpaceTeacherStudentsState }) => ({
    ...adapter.getSelectors(selectSpaceTeacherStudentsState)
  }),
});

export const { selectIds, selectEntities, selectAll, selectTotal, selectDetails } =
  spaceTeacherStudentsFeature;

export const selectFilteredStudents = createSelector(selectAll, (students) => {
  return students.sort((a, b) => {
    if (a.lastname < b.lastname) {
      return -1;
    } else if (a.lastname > b.lastname) {
      return 1;
    } else {
      if (a.firstname < b.firstname) {
        return -1;
      } else if (a.firstname > b.firstname) {
        return 1;
      } else {
        return 0;
      }
    }
  });
});