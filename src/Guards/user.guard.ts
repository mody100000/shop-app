import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  const authServ = inject(AuthService);
  const router = inject(Router);
  if (authServ.isUserLogged) {
    return true;
  } else {
    alert('user not loged in');
    router.navigate(['/login']);
    return false;
  }
};
