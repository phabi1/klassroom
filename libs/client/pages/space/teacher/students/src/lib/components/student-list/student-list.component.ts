import { Component, Input } from '@angular/core';

@Component({
  selector: 'klassroom-space-teacher-students-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
  @Input()
  items: any[] = [];
}
