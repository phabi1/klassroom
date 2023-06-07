import { Route } from '@angular/router';
import { AddComponent } from './containers/add/add.component';
import { DetailsComponent } from './containers/details/details.component';
import { EmptyComponent } from './containers/empty/empty.component';
import { PageComponent } from './containers/page/page.component';

export const clientPagesSpaceTeacherStudentsRoutes: Route[] = [
  {
    path: '', component: PageComponent,
    children: [
      { path: '', component: EmptyComponent },
      { path: 'add', component: AddComponent },
      { path: ':student', component: DetailsComponent },
    ]
  }
];
