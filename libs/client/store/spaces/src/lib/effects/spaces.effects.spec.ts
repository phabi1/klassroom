import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SpacesEffects } from './spaces.effects';

describe('SpacesEffects', () => {
  let actions$: Observable<any>;
  let effects: SpacesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpacesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SpacesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
