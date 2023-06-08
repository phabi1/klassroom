import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Space } from '../models/space.model';
import { SpaceActions } from '../actions/space.actions';

export const spacesFeatureKey = 'spaces';

export interface State extends EntityState<Space> {
  loading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Space> = createEntityAdapter<Space>();

export const initialState: State = adapter.getInitialState({
  loading: false,
  error: null
});

export const reducer = createReducer(
  initialState,
  on(SpaceActions.loadSpaces,
    (state) => ({ ...state, loading: true, error: null })
  ),
  on(SpaceActions.loadSpacesSuccess,
    (state, action) => ({ ...adapter.setAll(action.spaces, state), loading: false })
  ),
  on(SpaceActions.loadSpacesFailure,
    (state, action) => ({ ...adapter.removeAll(state), loading: false, error: action.error })
  )
);

export const spacesFeature = createFeature({
  name: spacesFeatureKey,
  reducer,
  extraSelectors: ({ selectSpacesState }) => ({
    ...adapter.getSelectors(selectSpacesState)
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = spacesFeature;
