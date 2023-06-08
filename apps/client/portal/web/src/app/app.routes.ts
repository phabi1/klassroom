import { Route } from '@angular/router';
import { IsLoggedGuard } from '@klassroom/client/common/auth';
import {
  redirectToSpaceGuard,
  selectSpaceGuard,
} from '@klassroom/client/store/space';

export const appRoutes: Route[] = [
  {
    path: '',
    canActivate: [IsLoggedGuard],
    children: [
      { path: '', canActivate: [redirectToSpaceGuard] },
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
