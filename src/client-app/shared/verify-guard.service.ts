import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthDataStorage } from "../../common/auth-data.storage";
import { switchMap } from "rxjs/operators";

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

    private check() {
        return Observable
            .zip(
                this.authDataStorage.getClientIsVerified('IsEmailConfirmed'),
                this.authDataStorage.getClientIsVerified('IsPhoneConfirmed'),
                this.authDataStorage.getClientIsVerified('HasVerifiedIdentity')
            )
            .pipe(
                switchMap(data => {
                    const isEmailVerified = data[0];
                    const isPhoneVerified = data[1];
                    const isIDVerified = data[2];

                    if (!isEmailVerified || !isPhoneVerified) {
                        this.router.navigate(["/onboarding"]);
                        return Observable.of(false);
                    } else if (!isIDVerified) {
                        this.router.navigate(["/auth/login-two-factor"]);
                        return Observable.of(false);
                    } else {
                        this.router.navigate(["/"]);
                        return Observable.of(true);
                    }
                })
            );
    }
}
