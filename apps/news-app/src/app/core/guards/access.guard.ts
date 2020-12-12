import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/auth/user-local-storage/localStorageService.service';

@Injectable({
  providedIn: 'root',
})
export class AccessGuard implements CanActivate {
  token = this.localStorageService.getState();

  constructor(private localStorageService: LocalStorageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this.token &&
      !state.url.includes('/user/login') &&
      !state.url.includes('/user/register')
    ) {
      return true;
    } else if (
      (!this.token && state.url === '/user/login') ||
      (!this.token && state.url === '/user/register')
    ) {
      return true;
    }
    return false;
  }
}
