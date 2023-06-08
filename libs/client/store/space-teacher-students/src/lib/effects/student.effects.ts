import { Injectable } from '@angular/core';
import { GraphqlService, gql } from '@klassroom/client/common/graphql';
import { SpaceSelectors } from '@klassroom/client/store/space';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { catchError, first, map, of, switchMap } from 'rxjs';
import { StudentActions } from '../actions/student.actions';
import { Student } from '../models/student.model';

export const GET_STUDENTS_GQL = gql`
  query ($course: ID!) {
    students(course: $course) {
      id
      firstname
      lastname
      shortname
      sex
      cover
      grade {
        title
      }
    }
  }
`;

export const GET_STUDENT_DETAILS_GQL = gql`
  query ($id: ID!) {
    student(id: $id) {
      id
      firstname
      lastname
      shortname
      sex
      cover
      birthday
      grade {
        id
        title
      }
      parents {
        id
        firstname
        lastname
        role
      }
    }
  }
`;

export const ADD_STUDENT_GQL = gql`
mutation ($input: CreateStudentInput!) {
createStudent(input: $input) {
id
      firstname
      lastname
      shortname
      sex
      cover
}
}`;

@Injectable()
export class StudentEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentActions.loadStudents),
      switchMap(() =>
        this.store.pipe(
          select(SpaceSelectors.selectCurrentSpace),
          first(),
          switchMap((space) => {
            if (space) {
              return this.graphqlService
                .fetch<{ students: Student[] }>(GET_STUDENTS_GQL, { course: (space as any).course })
                .pipe(
                  map((res) =>
                    StudentActions.loadStudentsSuccess({ students: res.data.students })
                  ),
                  catchError((error) =>
                    of(StudentActions.loadStudentsFailure({ error }))
                  )
                )
            }
            return of(StudentActions.loadStudentsFailure({ error: 'Invalid space' }));
          })
        )
      )
    );
  });

  loadStudentDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentActions.loadStudentDetails),
      switchMap((action) => {
        return this.graphqlService
          .fetch<{ student: Student }>(GET_STUDENT_DETAILS_GQL, { id: action.id })
          .pipe(
            map((res) =>
              StudentActions.loadStudentDetailsSuccess({ student: res.data.student })
            ),
            catchError((error) =>
              of(StudentActions.loadStudentDetailsFailure({ error }))
            )
          )
      })
    );

  });

  add$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentActions.addStudent),
      switchMap((action) => this.graphqlService.fetch<{ createStudent: any }>(ADD_STUDENT_GQL, { input: action.data }).pipe(
        map((res) => {
          return StudentActions.addStudentSuccess({ student: res.data.createStudent });
        }),
        catchError(err => of(StudentActions.addStudentFailure({ error: err })))
      ))
    )
  });
  constructor(
    private actions$: Actions,
    private store: Store,
    private graphqlService: GraphqlService
  ) { }
}
