import { Route } from '@angular/router';
import { IsLoggedGuard } from '@klassroom/client/common/auth';

export const appRoutes: Route[] = [

  {
    path: '',
    canActivate: [IsLoggedGuard],
    children: [
      {
        path: 'space/:space/teacher',
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
        ]
      },
      {
        path: 'space/:space/student',
        loadChildren: () =>
          import('@klassroom/client/pages/space/dashboard').then(
            (m) => m.ClientPagesSpaceDashboardModule
          ),
      },
      {
        path: 'space/:space/parent',
        loadChildren: () =>
          import('@klassroom/client/pages/space/dashboard').then(
            (m) => m.ClientPagesSpaceDashboardModule
          ),
      },
    ],
  },
];
