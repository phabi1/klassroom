import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SpaceTeacherStudentsStoreModule } from '@klassroom/client/store/space-teacher-students';
import { StudentAvatarComponent } from './components/student-avatar/student-avatar.component';
import { StudentItemComponent } from './components/student-item/student-item.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AddComponent } from './containers/add/add.component';
import { DetailsComponent } from './containers/details/details.component';
import { EmptyComponent } from './containers/empty/empty.component';
import { ListComponent } from './containers/list/list.component';
import { PageComponent } from './containers/page/page.component';
import { clientPagesSpaceTeacherStudentsRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    SpaceTeacherStudentsStoreModule,
    RouterModule,
    RouterModule.forChild(clientPagesSpaceTeacherStudentsRoutes),
  ],
  declarations: [
    PageComponent,
    EmptyComponent,
    AddComponent,
    DetailsComponent,
    StudentListComponent,
    ListComponent,
    StudentItemComponent,
    StudentAvatarComponent,
  ],
})
export class ClientPagesSpaceTeacherStudentsModule { }
