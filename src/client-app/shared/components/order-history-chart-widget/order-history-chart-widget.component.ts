import { Component, OnInit, OnDestroy, ChangeDetectorRef, AfterViewInit } from "@angular/core";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs/Subject";
import { PriceRange, MarketChartData } from "../../../../common/models/market-chartdata.model";
import { MarketDataService } from "../../../../common/services/market-data.service";
import { SymbolService } from "../../../shared/services/symbol.service";
import "rxjs/add/observable/interval";
import { TransactionRouter } from "../../../shared/transaction-router";

@Component({
    selector: "app-order-history-chart-widget",
    templateUrl: "./order-history-chart-widget.component.html",
    styleUrls: ["./order-history-chart-widget.component.scss"],
})
export class OrderHistoryChartWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    tradesChartsOption: any;
    private ngUnsub = new Subject();

    marketChartData = new MarketChartData();
    lastPrice: number;
    priceRange = new PriceRange();
    currentSymbol: string;

    constructor(
        private marketDataService: MarketDataService,
        private cd: ChangeDetectorRef,
        private txRouter: TransactionRouter,
        private symbolService: SymbolService) {
            this.currentSymbol = this.symbolService.symbol;
        }

    ngAfterViewInit() {

    }

    ngOnInit() {
        this.marketDataService
            .getMarketChartData(this.currentSymbol)
            .pipe(takeUntil(this.ngUnsub))
            .subscribe(data => {
                this.marketChartData = data;
                this.cd.markForCheck();
            });
        this.marketDataService
            .getLastPrice(this.currentSymbol)
            .pipe(takeUntil(this.ngUnsub))
            .subscribe(data => {
                this.lastPrice = data;
                this.cd.markForCheck();
            });
        this.marketDataService
            .getMarketRange(this.currentSymbol)
            .pipe(takeUntil(this.ngUnsub))
            .subscribe(data => {
                if (data.min == null || data.max == null) {
                    this.priceRange = {
                        "min": 0,
                        "max": 0
                    };
                } else {
                    this.priceRange = data;
                }
                this.cd.markForCheck();
            });

        const apiFakeData = {
            "symbol": "BTC_USD",
            "entries": [
                {
                    "type": "bid",
                    "total": "12.3",
                    "price": "10100"
                },
                {
                    "type": "ask",
                    "total": "10.1",
                    "price": "10330"
                },
                {
                    "type": "ask",
                    "total": "0.5",
                    "price": "10230"
                },
                {
                    "type": "bid",
                    "total": "67",
                    "price": "10540"
                },
                {
                    "type": "ask",
                    "total": "86",
                    "price": "10650"
                },
                {
                    "type": "bid",
                    "total": "63",
                    "price": "10340"
                },
                {
                    "type": "ask",
                    "total": "26",
                    "price": "10450"
                },
                {
                    "type": "bid",
                    "total": "73",
                    "price": "10560"
                },
                {
                    "type": "ask",
                    "total": "43",
                    "price": "10090"
                },
                {
                    "type": "bid",
                    "total": "23",
                    "price": "10790"
                },
                {
                    "type": "ask",
                    "total": "12",
                    "price": "10150"
                },
            ]
        };
        const xAxisData = [];
        const bidData = [];
        const askData = [];
        console.log(this.marketChartData);
        const chartData = apiFakeData.entries;
        chartData.sort(function (a, b) { return parseFloat(a.price) - parseFloat(b.price); });
        chartData.forEach(function (entrie) {
            if (!xAxisData.includes(entrie.price)) {
                xAxisData.push(entrie.price);
                if (entrie.type == "bid") {
                    bidData.push(entrie.total);
                    askData.push("");
                } else {
                    askData.push(entrie.total);
                    bidData.push("");
                }
            }
        });

        this.tradesChartsOption = {
            legend: {
                data: ["Buyers", "Sellers"],
                bottom: "3%"
            },
            grid: {
                left: "6%",
                right: "6%",
                bottom: "15%",
                top: "20px",
            },
            tooltip: {
                formatter: function (params) {
                    return "At <span style=\"font-weight: bold;\">$" + params.name + "</span> per BTC ...</br>" +
                        params.marker + " <span style=\"font-weight: bold;\">" + params.data + " BTC</span> for " + params.seriesName + "</br>" +
                        "<span style=\"font-weight: bold;\">   $" + parseFloat(params.name) * params.data + " total</span>";
                },
                backgroundColor: "#fff",
                borderWidth: 1,
                borderRadius: 0,
                textStyle: {
                    color: "#696969",
                    fontSize: 12,
                    lineHeight: 56,
                },
                padding: 10
            },
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    formatter: "${value}"
                },
                scale: true
            },
            yAxis: [{
                type: "value",
                axisLabel: {
                    formatter: function (value, index) {
                        if (value <= 0) {
                            return "";
                        } else {
                            return value + "\nBTC";
                        }
                    }
                },
                splitLine: {
                    show: false
                },
                inverse: true,
                min: -100,
                max: 100,
                scale: true
            },
            {
                type: "value",
                axisLabel: {
                    formatter: function (value, index) {
                        if (value <= 0) {
                            return "";
                        } else {
                            return value + "\nBTC";
                        }
                    }
                },
                splitLine: {
                    show: true
                },
                min: -100,
                max: 100
            }],
            series: [{
                name: "Buyers",
                type: "bar",
                data: bidData,
                stack: "one",
                tooltip: {
                    borderColor: "#4dd0e1"
                },
                itemStyle: {
                    color: "#4dd0e1",
                    barBorderRadius: [0, 0, 4, 4]
                },
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }, {
                name: "Sellers",
                type: "bar",
                data: askData,
                stack: "one",
                yAxisIndex: 1,
                tooltip: {
                    borderColor: "#fb8c00"
                },
                itemStyle: {
                    color: "#fb8c00",
                    barBorderRadius: [4, 4, 0, 0]
                },
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }],
            animationEasing: "elasticOut",
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };

    }

    ngOnDestroy() {

    }

}
