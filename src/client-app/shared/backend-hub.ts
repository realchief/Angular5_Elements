import { Injectable } from "@angular/core";
import { HubConnection } from "@aspnet/signalr-client";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { TradePublicData } from "../../common/models/trade-public-data.model";
import { Router } from "@angular/router";
import { TOKEN_STORAGE_KEY } from "./api.service";
import { environment } from "../../environments/environment";
import { OrderDto } from "./models/order-dto";

@Injectable()
export class BackendHub {
  private hub: HubConnection;

  //balance$ = new BehaviorSubject<UserBalanceDto>(null);
  //priceRange$ = new BehaviorSubject<PriceRange>(null);
  recentTradesUpdates$ = new BehaviorSubject<TradePublicData[]>(null);
  ordersUpdates$ = new BehaviorSubject<OrderDto[]>(null);
  chartData$ = new BehaviorSubject<any>([]);

  constructor(private router: Router) {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (!token) {
      this.router.navigate(["/login"]);
      return;
    }
    const url = `${environment.backendEndpoint}/${environment.marketDataHub}?tokenFromSignalR=${token}`;
    this.hub = new HubConnection(url);
    //this.hub.on("setUserBalance", dto => {
    //  this.balance$.next(dto);
    //});
    //this.hub.on("setPriceRange", range => {
    //  this.priceRange$.next(range);
    //});
    this.hub.on("updateTrades", trades => {
      this.recentTradesUpdates$.next(trades);
    });
    this.hub.on("updateOrders", orders => {
      this.ordersUpdates$.next(orders);
    });
    this.hub.on("updateChartData", data => {
      this.chartData$.next(data);
    });
    this.hub.on("authError", () => {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      this.router.navigate(["/login"]);
    });
    this.hub.onclose(e => {
      alert("Disconnected from server, logging out...");
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      this.router.navigate(["/login"]);
    });
    // this.hub.start();
  }
}
