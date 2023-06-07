import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { clientPagesSpaceTeacherStudentsRoutes } from './lib.routes';
import { PageComponent } from './containers/page/page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EmptyComponent } from './containers/empty/empty.component';
import { AddComponent } from './containers/add/add.component';
import { DetailsComponent } from './containers/details/details.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { ListComponent } from './containers/list/list.component';
import { StudentItemComponent } from './components/student-item/student-item.component';
import { StudentAvatarComponent } from './components/student-avatar/student-avatar.component';
import { SpaceTeacherStudentsStoreModule } from '@klassroom/client/store/space-teacher-students';

@NgModule({
  imports: [
    CommonModule,
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
