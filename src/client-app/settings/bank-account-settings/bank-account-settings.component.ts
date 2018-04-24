import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-bank-account-settings",
  templateUrl: "./bank-account-settings.component.html",
  styleUrls: ["./bank-account-settings.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BankAccountSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
