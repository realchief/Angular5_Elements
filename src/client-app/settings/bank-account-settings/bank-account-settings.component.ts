import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from "@angular/core";
import {ClientService} from "../../../common/services/client.service";
import {Subject} from "rxjs/Subject";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: "app-bank-account-settings",
  templateUrl: "./bank-account-settings.component.html",
  styleUrls: ["./bank-account-settings.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BankAccountSettingsComponent implements OnInit, OnDestroy {
  private ngUnsub = new Subject<void>();
  banks = [
    {
      "id": 1,
      "name": "ANDORRA BANC AGRICOL REIG S.A.",
      "city": null,
      "countryId": 6,
      "swiftCodes": [
        "BACAADAD"
      ]
    },
    {
      "id": 2,
      "name": "ANDORRA GESTIO AGRICOL REIG SAU",
      "city": null,
      "countryId": 6,
      "swiftCodes": [
        "AAMAADAD"
      ]
    },
    {
      "id": 3,
      "name": "BANC SABADELL D'ANDORRA S.A.",
      "city": null,
      "countryId": 6,
      "swiftCodes": [
        "BSANADAD"
      ]
    },
  ];

  accounts = [
    {
      "id": 1,
      "clientId": 1,
      "name": "Account 1",
      "accountHolder": "Max",
      "accountNumber": "1234567890",
      "swiftCode": "BSANADAD",
      "bankId": 3,
      "isDefault": true
    },
    {
      "id": 2,
      "clientId": 1,
      "name": "Account 2",
      "accountHolder": "Max",
      "accountNumber": "1234567890",
      "swiftCode": "AAMAADAD",
      "bankId": 2,
      "isDefault": false
    }
  ];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService
      .getClientBankAccounts()
      .pipe(
        takeUntil(this.ngUnsub)
      )
      .subscribe(accounts => {
        console.log(accounts);
        // this.accounts = accounts;
      });
  }

  ngOnDestroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete();
  }

  getBankName(id: number): string {
    return this.banks.find(x => x.id === id).name;
  }

  onDefaultAccountChange(accId: number) {
    this.accounts.forEach(x => x.isDefault = x.id === accId);
  }
}
