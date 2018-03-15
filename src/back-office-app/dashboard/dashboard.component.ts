import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import {BackendHub} from "../../client-app/shared/backend-hub";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  // constructor(private dataStore: BackendHub) { }

  ngOnInit() {
  }

}
