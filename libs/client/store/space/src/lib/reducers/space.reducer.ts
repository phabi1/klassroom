import { createFeature, createReducer, on } from '@ngrx/store';
import { SpaceActions } from '../actions/space.actions';

export const spaceFeatureKey = 'space';

export interface State {
  id: string | null;
}

export const initialState: State = {
  id: null,
};

export const reducer = createReducer(
  initialState,
  on(SpaceActions.selectSpace, (state) => state)
);

export const spaceFeature = createFeature({
  name: spaceFeatureKey,
  reducer,
});
