import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    if(sessionStorage.getItem('accessToken')) {
      return true
    } else {
      return this._router.createUrlTree(['/'],
        {queryParams: {returnUrl: state.url}}
      )
    }
  }
}
