import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {ApiService} from "../../../../shared/api.service";

@Component({
  selector: "app-client-details",
  templateUrl: "./client-details.component.html",
  styleUrls: ["./client-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientDetailsComponent implements OnInit, OnDestroy {

  private ngUnsub = new Subject();

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.ngUnsub.next();
    this.ngUnsub.complete();
  }

}
