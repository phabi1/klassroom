import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SpaceTeacherStudentsStoreModule } from '@klassroom/client/store/space-teacher-students';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { StudentAvatarComponent } from './components/student-avatar/student-avatar.component';
import { StudentItemComponent } from './components/student-item/student-item.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AddComponent } from './containers/add/add.component';
import { DetailsComponent } from './containers/details/details.component';
import { EmptyComponent } from './containers/empty/empty.component';
import { ListComponent } from './containers/list/list.component';
import { PageComponent } from './containers/page/page.component';
import { clientPagesSpaceTeacherStudentsRoutes } from './lib.routes';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    FormlyMaterialModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
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
    SearchInputComponent,
  ],
})
export class ClientPagesSpaceTeacherStudentsModule { }
