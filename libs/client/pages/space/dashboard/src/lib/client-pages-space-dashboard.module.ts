import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { clientPagesSpaceDashboardRoutes } from './lib.routes';
import { PageComponent } from './containers/page/page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(clientPagesSpaceDashboardRoutes),
  ],
  declarations: [PageComponent],
})
export class ClientPagesSpaceDashboardModule {}
