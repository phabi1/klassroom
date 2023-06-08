import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student, StudentActions, StudentsSelectors } from '@klassroom/client/store/space-teacher-students';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'klassroom-space-teacher-students-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  student$: Observable<Student | null>;

  constructor(private readonly store: Store, private route: ActivatedRoute) { 
    this.student$ = this.store.pipe(select(StudentsSelectors.selectDetails));
  }

  ngOnInit(): void {
    this.store.dispatch(StudentActions.loadStudentDetails({ id: this.route.snapshot.params['student'] }));
  }
}
