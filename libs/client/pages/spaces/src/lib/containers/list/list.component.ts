import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Space, SpaceActions, SpacesSelectors } from '@klassroom/client/store/spaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'klassroom-spaces-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items$: Observable<Space[]>;

  constructor(private store: Store) {
    this.items$ = this.store.pipe(select(SpacesSelectors.selectAll))
  }
  
  ngOnInit(): void {
    this.store.dispatch(SpaceActions.loadSpaces());
  }
}
