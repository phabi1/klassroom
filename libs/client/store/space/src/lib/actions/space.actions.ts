import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const SpaceActions = createActionGroup({
  source: 'Space',
  events: {
    'Select Space': props<{ id: string }>(),
    'Select Space Success': props<{ space: any }>(),
    'Select Space Failure': props<{ error: string }>(),
  },
});
