import { Route } from '@angular/router';
import { IsLoggedGuard } from '@klassroom/client/common/auth';
import { LayoutComponent as DefaultLayoutComponent } from '@klassroom/client/layouts/default';
import {
  redirectToSpaceGuard,
  selectSpaceGuard,
} from '@klassroom/client/store/space';
import { WaitingComponent } from './components/waiting/waiting.component';

export const appRoutes: Route[] = [
  {
    path: '',
    canActivate: [IsLoggedGuard],
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        canActivate: [redirectToSpaceGuard],
        component: WaitingComponent
      },
      {
        path: 'space/:space/teacher',
        canActivate: [selectSpaceGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@klassroom/client/pages/space/dashboard').then(
                (m) => m.ClientPagesSpaceDashboardModule
              ),
          },
          {
            path: 'students',
            loadChildren: () =>
              import('@klassroom/client/pages/space/teacher/students').then(
                (m) => m.ClientPagesSpaceTeacherStudentsModule
              ),
          },
        ],
      },
      {
        path: 'space/:space/student',
        canActivate: [selectSpaceGuard],
        loadChildren: () =>
          import('@klassroom/client/pages/space/dashboard').then(
            (m) => m.ClientPagesSpaceDashboardModule
          ),
      },
      {
        path: 'space/:space/parent',
        canActivate: [selectSpaceGuard],
        loadChildren: () =>
          import('@klassroom/client/pages/space/dashboard').then(
            (m) => m.ClientPagesSpaceDashboardModule
          ),
      },
      {
        path: 'spaces',
        loadChildren: () =>
          import('@klassroom/client/pages/spaces').then(
            (m) => m.ClientPagesSpacesModule
          ),
      },
    ],
  },
];
