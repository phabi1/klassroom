import { Component, OnInit } from '@angular/core';
import { StudentActions } from '@klassroom/client/store/space-teacher-students';
import { Store } from '@ngrx/store';

@Component({
  selector: 'klassroom-space-teacher-students-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(StudentActions.loadStudents());
  }
}
