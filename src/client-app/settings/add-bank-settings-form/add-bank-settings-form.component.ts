import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-add-bank-settings-form",
  templateUrl: "./add-bank-settings-form.component.html",
  styleUrls: ["./add-bank-settings-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBankSettingsFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
