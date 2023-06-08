import { Component } from '@angular/core';
import { Space } from '@klassroom/client/store/spaces';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SpaceSelectors } from '@klassroom/client/store/space';

@Component({
  selector: 'klassroom-layouts-default-sidebar-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent {
  currentSpace$: Observable<Space | null>;
  constructor(private readonly store: Store) {
    this.currentSpace$ = this.store.pipe(select(SpaceSelectors.selectCurrentSpace))
  }
}
