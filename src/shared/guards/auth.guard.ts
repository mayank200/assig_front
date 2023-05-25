import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const isLoggedIn = localStorage.getItem('login');
    const activeUser = localStorage.getItem('activeUser');

    if (isLoggedIn !== null && activeUser != null) {
      return true;
    } else {
      this.router.navigate(['/logout']);
      return false;
    }
  }
}
