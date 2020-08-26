import { AuthCheckService } from './auth-check.service';
import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private authCheckService: AuthCheckService,
    public router: Router
  ) { }

  canActivate(): boolean {
    if (this.authCheckService.isAuthenticate()) {
      console.log('User is authenticated');

      return true;
    } else {
      console.log('User not authenticated');
      this.router.navigate(['/auth/signin']);
      return false;
    }
  }

}
