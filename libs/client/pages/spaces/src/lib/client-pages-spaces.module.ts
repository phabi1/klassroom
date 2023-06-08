import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { clientPagesSpacesRoutes } from './lib.routes';
import { ListComponent } from './containers/list/list.component';
import { SpacesStoreModule } from '@klassroom/client/store/spaces';

@NgModule({
  imports: [
    CommonModule,
    SpacesStoreModule,
    RouterModule.forChild(clientPagesSpacesRoutes),
    RouterModule,
  ],
  declarations: [
    ListComponent
  ],
})
export class ClientPagesSpacesModule { }
