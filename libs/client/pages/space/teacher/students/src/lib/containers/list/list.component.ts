import { Component } from '@angular/core';

@Component({
  selector: 'klassroom-space-teacher-students-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  students = [{ id: '1', firstname: 'Alexis', lastname: 'Heilles', sex: 'boy' }, { id: '2', firstname: 'Tess', lastname: 'Pleau', sex: 'girl' }];
}
