import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, AfterViewInit } from "@angular/core";
import { filter, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs/Subject";
import { PriceRange, RecentTradeStats } from "../../../common/models/recent-trade-stats.model";
import { TradeDataService } from "../../../common/services/trade-data.service";
import { TradePublicData } from "../../../common/models/trade-public-data.model";
import { BackendHub } from "../../shared/backend-hub";
import Chart from "chart.js";
import "rxjs/add/observable/interval";
import { DecimalPipe } from "@angular/common";
import { MatDialog } from "@angular/material";
import { OrderType } from "../../../common/enums/order-type";
import { CreateOrderDialogComponent } from "../../dialog/create-order-dialog/create-order-dialog.component";
import { OrderClass } from "../../../common/enums/order-class";
import { TransactionRouter } from "../../shared/transaction-router";

@Component({
  selector: "app-history-data",
  templateUrl: "./history-data.component.html",
  styleUrls: ["./history-data.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryDataComponent implements OnInit, AfterViewInit, OnDestroy {
  private ngUnsub = new Subject();
  private bidBgColor = "rgba(54, 162, 235, 0.2)";
  private askBgColor = "rgba(255, 99, 132, 0.2)";

  trades: TradePublicData[] = [];
  lastPrice: number;
  priceRange = new PriceRange();

  constructor(
    private tradeDataService: TradeDataService,
    private cd: ChangeDetectorRef,
    private txRouter: TransactionRouter,
    private dialog: MatDialog,
    private decimalPipe: DecimalPipe) { }

  ngAfterViewInit() {
    //this.createChart();
  }
  ngOnInit() {
    this.tradeDataService
      .getRecentStats()
      .pipe(takeUntil(this.ngUnsub))
      .subscribe(data => {
        this.lastPrice = data.lastPrice;
        this.priceRange = data.priceRange;
        this.trades = data.lastTrades;
        this.cd.markForCheck();
      });
    this.txRouter
      .newTrades$
      .pipe(takeUntil(this.ngUnsub))
      .subscribe(newTrades => {
        newTrades.reverse().map(t => {
          if (this.trades.length >= 15) {
            this.trades.pop();
          }
          this.trades.unshift(t);
        });
        if (newTrades[0]) {
          this.lastPrice = newTrades[0].price;
        }
        this.cd.markForCheck();
    });
    //this.hub.recentTradesUpdates$
    //  .pipe(
    //    filter(x => !!x),
    //    takeUntil(this.ngUnsub)
    //  )
    //  .subscribe(newTrades => {
    //    newTrades.reverse().map(t => {
    //      if (this.trades.length >= 15) {
    //        this.trades.pop();
    //      }
    //      this.trades.unshift(t);
    //    });
    //    if (newTrades[0]) {
    //      this.lastPrice = newTrades[0].price;
    //    }
    //    this.cd.markForCheck();
    //  });
    //
    //this.hub.priceRange$
    //  .pipe(
    //    filter(x => !!x),
    //    takeUntil(this.ngUnsub)
    //  )
    //  .subscribe(range => {
    //    this.priceRange = range;
    //    this.cd.markForCheck();
    //  });

    //this.hub
    //  .chartData$
    //  .pipe(
    //    filter(x => !!x),
    //    takeUntil(this.ngUnsub)
    //  )
    //  .subscribe(data => {
    //    if (data.length === 0) {
    //      return;
    //    }
    //    const allLabels = data.entries.map(x => x.price);
    //    const fillColors = data.entries.map(x => x.type === "ask" ? this.askBgColor : this.bidBgColor);
    //    const borderColors = data.entries.map(x => x.type === "ask" ? "rgba(255,99,132,1)" : "rgba(54, 162, 235, 1)");
    //    this.chart.data.labels = allLabels;
    //    this.chart.data.datasets[0].data = data.entries.map(x => x.total);
    //    this.chart.data.datasets[0].customData = data.entries.map(x => ({
    //      total: this.decimalPipe.transform(x.total, "1.6-6"),
    //      type: x.type,
    //      price: this.decimalPipe.transform(x.price, "1.2-2"),
    //      totalPrice: this.decimalPipe.transform(x.price * x.total, "1.2-2")
    //    }));
    //    this.chart.data.datasets[0].backgroundColor = fillColors;
    //    this.chart.data.datasets[0].borderColor = borderColors;
    //    this.chart.options.scales.yAxes[0].ticks.max = Math.max.apply(null, data.entries.map(x => x.total));
    //    this.chart.update();
    //  });
  }

  ngOnDestroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete();
  }

  //private createChart() {
  //  this.chart = new Chart("chart", {
  //    type: "bar",
  //    labels: ["Ask", "Bid"],
  //    options: {
  //      onClick: (e, elem) => {
  //        if (elem.length === 0) {
  //          return;
  //        }
  //        const model = elem[0]._model;
  //        const chartData = elem[0]._chart.data;
  //        const i = chartData.labels.findIndex(x => x === model.label);
  //        if (i === -1) {
  //          return;
  //        }
  //        const customChartData = chartData.datasets[0].customData[i];
  //        const orderType = customChartData.type === "ask" ? OrderType.Ask : OrderType.Bid;
  //        const dialogData = {
  //          orderType: orderType,
  //          orderClass: OrderClass.Limit,
  //          price: model.label
  //        };
  //        this.dialog.open(CreateOrderDialogComponent, {data: dialogData});
  //      },
  //      legend: false,
  //      responsive: true,
  //      scales: {
  //        xAxes: [{
  //          barPercentage: 1,
  //          categoryPercentage: 1
  //        }],
  //        yAxes: [{
  //          ticks: {
  //            max: 300,
  //            min: 0
  //          },
  //          barPercentage: 1,
  //          categoryPercentage: 1
  //        }],
  //      },
  //      tooltips: {
  //        enabled: true,
  //        mode: "index",
  //        position: "nearest",
  //        callbacks: {
  //          title: (tooltipItems, data) => {
  //            const item = tooltipItems[0];
  //            const customData = data.datasets[item.datasetIndex].customData[item.index];
  //            return `$ ${customData.price}`;
  //          },
  //          label: (item, data) => {
  //            const customData = data.datasets[item.datasetIndex].customData[item.index];
  //            const text = customData.type === "ask" ? "Can be bought: " : "Can be sold: ";
  //            return text + customData.total + " BTC";
  //          },
  //          footer: (tooltipItems, data) => {
  //            const item = tooltipItems[0];
  //            const customData = data.datasets[item.datasetIndex].customData[item.index];
  //            return "For a total: $ " + (customData.totalPrice);
  //          }
  //        }
  //      }
  //    },
  //    data: {
  //      labels: [],
  //      datasets: [
  //        {
  //          label: "Data",
  //          data: [],
  //          backgroundColor: "rgba(255, 99, 132, 0.2)",
  //          borderColor: "rgba(255,99,132,1)",
  //          borderWidth: 1
  //        }
  //      ]
  //    }
  //  });
  //}
}
