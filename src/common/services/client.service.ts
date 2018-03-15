import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ClientBalanceModel } from "../models/client-balance.model";
import { AuthDataStorage } from "../auth-data.storage";
import { ClientPublicModel } from "../models/client-public.model";
import { ElementsApiService } from "./elements-api.service";
import "rxjs/add/operator/publishReplay";

@Injectable()
export class ClientService {
  constructor(private api: ElementsApiService, private authDataStorage: AuthDataStorage) {}

  getClientPublicData(id: number): Observable<ClientPublicModel> {
    return this.api.get(`client/${id}`);
  }

  getBalance(clientId: number): Observable<ClientBalanceModel[]> {
    return this.api.get(`balance/${clientId}`);
  }
}
