import { Injectable } from "@angular/core";
import {ApiService, TOKEN_STORAGE_KEY} from "./api.service";
import {Observable} from "rxjs/Observable";
import {switchMap} from "rxjs/operators";
import {ClientValidation} from "./models/client-validation";

@Injectable()
export class ClientValidationService {

  constructor(private api: ApiService) { }

  getStep(): Observable<number> {
    return this.getClientValidModel()
      .pipe(
        switchMap(data => {
          if (data.accountVerificationStatus === 4) {
            localStorage.removeItem(TOKEN_STORAGE_KEY);
            location.reload();
          }
          if (!data.is2FaEnabled) {
            return Observable.of(0);
          }
          // TODO: uncomment after creating bank account
          // if (!data.hasBankAccount) {
          //   return Observable.of(1);
          // }
          if (!data.hasIdentityInfo) {
            return Observable.of(2);
          }
          if (!(data.hasPhotoId && data.hasUploadedDocument && data.hasCheck)) {
            return Observable.of(3);
          }
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
