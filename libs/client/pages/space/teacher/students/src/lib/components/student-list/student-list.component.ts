import { Component, Input } from '@angular/core';
import { Student } from '@klassroom/client/store/space-teacher-students';

@Component({
  selector: 'klassroom-space-teacher-students-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
  @Input()
  items: Student[] = [];
}
