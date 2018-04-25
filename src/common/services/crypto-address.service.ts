import {ElementsApiService} from "./elements-api.service";
import {Observable} from "rxjs/Observable";
import {CryptoAddressModel} from "../models/crypto-address.model";

export class CryptoAddressService {
  constructor(private api: ElementsApiService) {}

  getBtcAddresses(): Observable<CryptoAddressModel[]> {
    return this.api.get("cryptocurrency/btc/address/list");
  }

  createBtcAddress(): Observable<string> {
    return this.api.get("cryptocurrency/btc/address/create");
  }
}
