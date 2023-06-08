import { Injectable } from '@angular/core';
import { GraphqlService, gql } from '@klassroom/client/common/graphql';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SpaceActions } from '../actions/space.actions';

export const GET_MY_SPACES_GQL = gql`
query {
  spaces {
    ... on ISpace {
      id
      title
      type
    }
  }
}`;

@Injectable()
export class SpacesEffects {

  loadSpaces$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SpaceActions.loadSpaces),
      switchMap(() =>
        this.graphqlService.fetch(GET_MY_SPACES_GQL).pipe(
          map(res => SpaceActions.loadSpacesSuccess({ spaces: res.data.spaces })),
          catchError(error => of(SpaceActions.loadSpacesFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private readonly graphqlService: GraphqlService) { }
}
