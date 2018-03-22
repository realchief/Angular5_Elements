import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { PriceRange, EntrieData, MarketChartData } from "../models/market-chartdata.model";
import { ElementsApiService } from "./elements-api.service";

@Injectable()
export class MarketDataService {
    constructor(private api: ElementsApiService) { }

    getMarketRange(symbol): Observable<PriceRange> {
        return this.api.get("market-data/price-range?symbol=" + symbol + "_USD");
    }
    getLastPrice(symbol) {
        return this.api.get("market-data/last-price?symbol=" + symbol + "_USD");
    }
    getMarketChartData(symbol): Observable<MarketChartData> {
        return this.api.get("market-data/chart-data?symbol=" + symbol + "_USD");
    }
}
