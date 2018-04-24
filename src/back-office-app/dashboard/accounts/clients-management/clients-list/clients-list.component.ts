import {Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef} from "@angular/core";
import {ClientListModel} from "../../../../shared/models/client-list-model";
import {ClientSearchModel} from "../../../../shared/models/client-search-model";
import {ApiService} from "../../../../shared/api.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs/Subject";

@Component({
  selector: "app-clients-list",
  templateUrl: "./clients-list.component.html",
  styleUrls: ["./clients-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsListComponent implements OnInit, OnDestroy {

  searchModel: ClientSearchModel;
  clients: ClientListModel[];

  private ngUnsub = new Subject();

  constructor(private api: ApiService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.searchModel = {
      pageNumber: 1,
      perPageCount: 25,
      filter: {
        name: null,
        statuses: []
      }
    };
    this.findClients();
  }

  findClients() {
    this.api.post("client/get-clients", this.searchModel)
      .pipe(takeUntil(this.ngUnsub))
      .subscribe(result => { this.clients = result; this.cd.detectChanges(); }, err => alert(err));
  }

  ngOnDestroy(): void {
    this.ngUnsub.next();
    this.ngUnsub.complete();
  }
}
