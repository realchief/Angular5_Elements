import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { TransactionRouter } from "../shared/transaction-router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  constructor(private txRouter: TransactionRouter) {}

  ngOnInit() {
  }

}
