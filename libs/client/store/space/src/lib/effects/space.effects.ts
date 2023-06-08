import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { GraphqlService, gql } from '@klassroom/client/common/graphql';
import { of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { SpaceActions } from '../actions/space.actions';

export const GET_SPACE_GQL = gql`
  query ($id: ID!) {
    space(id: $id) {
      ... on TeacherSpace {
        id
        title
        course
      }
    }
  }
`;

@Injectable()
export class SpaceEffects {
  selectSpace$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SpaceActions.selectSpace),
      concatMap((action) =>
        this.graphqlService.fetch(GET_SPACE_GQL, { id: action.id }).pipe(
          map((res) => {
            return SpaceActions.selectSpaceSuccess({ space: res.data.space });
          }),
          catchError((err) =>
            of(SpaceActions.selectSpaceFailure({ error: err }))
          )
        )
      )
    );
  });

  selectedSpace$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SpaceActions.selectSpaceSuccess),
        tap((action) => {
          localStorage.setItem(
            'current_space',
            JSON.stringify({ id: action.space.id, type: action.space.type })
          );
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private graphqlService: GraphqlService
  ) {}
}
