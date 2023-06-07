import { Component, Input } from '@angular/core';

@Component({
  selector: 'klassroom-space-teacher-students-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css'],
})
export class StudentItemComponent {
  @Input()
  id!: string;

  @Input()
  firstname!: string;

  @Input()
  lastname!: string;

  @Input()
  sex = 'unknow';

  get fullname() {
    return this.firstname + ' ' + this.lastname;
  }
}
