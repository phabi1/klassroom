import { Component, Input } from '@angular/core';

@Component({
  selector: 'klassroom-space-teacher-students-student-avatar',
  templateUrl: './student-avatar.component.html',
  styleUrls: ['./student-avatar.component.css'],
})
export class StudentAvatarComponent {
  @Input()
  url!: string;

  @Input()
  sex!: string;

  @Input()
  size = 'sm';

  get source() {
    if (this.url) {
      return this.url;
    }
    if (this.sex === 'girl') {
      return '/assets/img/placeholders/students/girl.png';
    } else if (this.sex === 'boy') {
      return '/assets/img/placeholders/students/boy.png';
    } else {
      return '/assets/img/placeholders/students/default.png';
    }
  }
}
