import { Space } from '@klassroom/client/store/spaces';
import { createActionGroup, props } from '@ngrx/store';

export const SpaceActions = createActionGroup({
  source: 'Space',
  events: {
    'Select Space': props<{ id: string }>(),
    'Select Space Success': props<{ space: Space }>(),
    'Select Space Failure': props<{ error: string }>(),
  },
});
