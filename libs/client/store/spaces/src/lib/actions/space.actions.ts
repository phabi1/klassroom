import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Space } from '../models/space.model';

export const SpaceActions = createActionGroup({
  source: 'Spaces/API',
  events: {
    'Load Spaces': emptyProps(),
    'Load Spaces Success': props<{ spaces: Space[] }>(),
    'Load Spaces Failure': props<{ error: string }>(),
  }
});
