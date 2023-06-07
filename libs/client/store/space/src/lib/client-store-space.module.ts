import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SpaceEffects } from './effects/space.effects';
import * as fromSpace from './reducers/space.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromSpace.spaceFeatureKey, fromSpace.reducer),
    EffectsModule.forFeature([SpaceEffects]),
  ],
})
export class SpaceStoreModule {}
