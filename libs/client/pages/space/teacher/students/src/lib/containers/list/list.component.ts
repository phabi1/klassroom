import { Component } from '@angular/core';
import {
  Student,
  StudentsSelectors,
} from '@klassroom/client/store/space-teacher-students';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'klassroom-space-teacher-students-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  students$: Observable<Student[]>;

  constructor(private readonly store: Store) {
    this.students$ = this.store.pipe(
      select(StudentsSelectors.selectFilteredStudents)
    );
  }
}
