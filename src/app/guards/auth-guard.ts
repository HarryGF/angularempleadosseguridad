import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = sessionStorage.getItem('accessToken');

  console.log("--> Guard comprobando token:", token);

  if (token && token !== 'undefined' && token !== 'null' && token.trim() !== '') {
    return true;
  }

  console.log("--> No hay token válido. Redirigiendo a Login...");
  return router.createUrlTree(['/']);
};
