import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SpacesEffects } from './effects/spaces.effects';
import * as fromSpace from './reducers/space.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromSpace.spacesFeatureKey, fromSpace.reducer),
    EffectsModule.forFeature([SpacesEffects]),
  ],
})
export class SpacesStoreModule { }
