import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const toastrService = inject(ToastrService);
  console.log(authService.isAuthenticated());
  if (authService.isAuthenticated()) {
    return true;
    
  } else {
    router.navigate(["login"]);
    toastrService.info('Lütfen önce giriş yapınız');
    return false;
  }
};
