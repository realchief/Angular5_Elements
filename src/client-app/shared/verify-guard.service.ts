import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthDataStorage} from "../../common/auth-data.storage";
import {switchMap} from "rxjs/operators";

@Injectable()
export class VerifyGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private authDataStorage: AuthDataStorage) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.check();
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.check();
  }

  private check () {
    return Observable
      .zip(this.authDataStorage.getClientId(), this.authDataStorage.getClientIsVerified())
      .pipe(
        switchMap(data => {
          const id = data[0];
          const isVerified = data[1];
          if (id !== undefined && !isVerified) {
            this.router.navigate(["/onboarding"]);
            return Observable.of(false);
          }
          // TODO: role check
          return Observable.of(true);
        })
      );
  }
}
