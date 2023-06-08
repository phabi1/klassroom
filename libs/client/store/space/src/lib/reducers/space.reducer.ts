import { Space } from '@klassroom/client/store/spaces';
import { createFeature, createReducer, on } from '@ngrx/store';
import { SpaceActions } from '../actions/space.actions';

export const spaceFeatureKey = 'space';

export interface State {
  id: string | null;
  space: Space | null;
}

export const initialState: State = {
  id: null,
  space: null
};

export const reducer = createReducer(
  initialState,
  on(SpaceActions.selectSpaceSuccess, (state, action) => ({ id: action.space.id, space: action.space }))
);

export const spaceFeature = createFeature({
  name: spaceFeatureKey,
  reducer,
});
