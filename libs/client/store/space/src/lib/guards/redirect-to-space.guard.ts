import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const redirectToSpaceGuard: CanActivateFn = () => {
  const router = inject(Router);

  const data = localStorage.getItem('current_space');
  const space = data ? JSON.parse(data) : null;
  if (space) {
    return router.createUrlTree(['space', space.id, space.type.toLowerCase()]);
  }
  return router.createUrlTree(['/spaces']);
};
