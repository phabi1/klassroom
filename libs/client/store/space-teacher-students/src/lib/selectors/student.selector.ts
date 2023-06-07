import { createFeature } from '@ngrx/store';
import {
  adapter,
  reducer,
  spaceTeacherStudentsFeatureKey,
} from '../reducers/student.reducer';

export const spaceTeacherStudentsFeature = createFeature({
  name: spaceTeacherStudentsFeatureKey,
  reducer,
  extraSelectors: ({ selectSpaceTeacherStudentsState }) => ({
    ...adapter.getSelectors(selectSpaceTeacherStudentsState),
  }),
});

export const { selectIds, selectEntities, selectAll, selectTotal } =
  spaceTeacherStudentsFeature;
