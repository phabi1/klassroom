import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './containers/layout/layout.component';
import { TeacherComponent } from './components/sidebars/teacher/teacher.component';
import { StudentComponent } from './components/sidebars/student/student.component';
import { ParentComponent } from './components/sidebars/parent/parent.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatSidenavModule, MatToolbarModule],
  declarations: [
    LayoutComponent,
    TeacherComponent,
    StudentComponent,
    ParentComponent,
    SidebarComponent,
  ],
  exports: [LayoutComponent],
})
export class ClientLayoutsDefaultModule {}
