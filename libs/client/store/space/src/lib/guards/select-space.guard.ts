import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { SpaceActions } from '../actions/space.actions';
import { map } from 'rxjs';
import { Store } from '@ngrx/store';

export const selectSpaceGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const actions$ = inject(Actions);
  const router = inject(Router);

  store.dispatch(SpaceActions.selectSpace({ id: route.params['space'] }));

  return actions$.pipe(
    ofType(SpaceActions.selectSpaceSuccess, SpaceActions.selectSpaceFailure),
    map((action) => {
      if (action.type === '[Space] Select Space Success') {
        return true;
      } else {
        return router.createUrlTree(['/']);
      }
    })
  );
};
