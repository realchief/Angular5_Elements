import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsComponent implements OnInit {

  constructor() { }

  selectedMenu: number;

  toggleMenu(menu: number) {
    this.selectedMenu = menu;
  }

  ngOnInit() {
    this.selectedMenu = 0;
  }

}
