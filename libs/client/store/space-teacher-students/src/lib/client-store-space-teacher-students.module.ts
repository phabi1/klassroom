import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StudentEffects } from './effects/student.effects';
import * as fromStudent from './reducers/student.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromStudent.spaceTeacherStudentsFeatureKey, fromStudent.reducer),
    EffectsModule.forFeature([StudentEffects])
  ],
})
export class SpaceTeacherStudentsStoreModule { }
