import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { switchMap } from "rxjs/operators";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";
import { AuthDataStorage } from "../../../common/auth-data.storage";
import { ClientValidation } from "../models/client-validation";

@Injectable()
export class ClientValidationService {

    constructor(
        private api: ApiService,
        private authDataStorage: AuthDataStorage,
    ) { }

    getStep(): Observable<number> {
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

                    // if (!isEmailVerified) {
                    //     return Observable.of(0);
                    // } else if (!isPhoneVerified) {
                    //     return Observable.of(1);
                    // }
                    // TODO: role check
                    return Observable.of(4);
                })
            );
    }

    getModel(): Observable<ClientValidation> {
        return this.getClientValidModel();
    }

    private getClientValidModel(): Observable<ClientValidation> {
        return this.api.get("client/get-validation");
    }
}
