import { Injectable } from '@angular/core';
import { GraphqlService, gql } from '@klassroom/client/common/graphql';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { StudentActions } from '../actions/student.actions';
import { Student } from '../models/student.model';

export const GET_STUDENTS_GQL = gql`
query ($course: ID) {
  students(course: $course) {
    id
  }
}`;

@Injectable()
export class StudentEffects {

  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentActions.loadStudents),
      switchMap(() =>
        this.graphqlService.fetch<Student[]>(GET_STUDENTS_GQL).pipe(
          map(data => StudentActions.loadStudentsSuccess({ students: data })),
          catchError(error => of(StudentActions.loadStudentsFailure({ error }))))
      ),
    );
  });
  constructor(private actions$: Actions, private graphqlService: GraphqlService) { }
}
