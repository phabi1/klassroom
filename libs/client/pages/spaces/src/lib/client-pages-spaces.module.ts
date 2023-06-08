import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { clientPagesSpacesRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(clientPagesSpacesRoutes),
    RouterModule,
  ],
})
export class ClientPagesSpacesModule {}
