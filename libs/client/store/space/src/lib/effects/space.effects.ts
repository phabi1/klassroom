import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { GraphqlService, gql } from '@klassroom/client/common/graphql';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { SpaceActions } from '../actions/space.actions';

export const GET_SPACE_GQL = gql`
  query ($id: ID!) {
    space(id: $id) {
      id
      title
      ... on TeacherSpace {
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
            console.log(res);
            return SpaceActions.selectSpaceSuccess(res);
          }),
          catchError((err) =>
            of(SpaceActions.selectSpaceFailure({ error: err }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private graphqlService: GraphqlService
  ) {}
}
