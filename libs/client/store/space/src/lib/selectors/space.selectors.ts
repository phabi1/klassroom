import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSpace from '../reducers/space.reducer';

export const selectSpaceState = createFeatureSelector<fromSpace.State>(
  fromSpace.spaceFeatureKey
);
