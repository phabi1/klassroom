import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromSpace from './reducers/space.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SpacesEffects } from './effects/spaces.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(fromSpace.spacesFeatureKey, fromSpace.reducer),
    EffectsModule.forFeature([SpacesEffects])
  ],
})
export class SpacesStoreModule { }
