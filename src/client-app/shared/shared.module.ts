import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ElementsPipesModule } from "../../common/pipes/elements-pipes.module";
import { ElementsApiService } from "../../common/services/elements-api.service";
import { ElementsServicesModule } from "../../common/services/elements-services.module";
import { OrderService } from "../../common/services/orders.service";
import { MarketDataService } from "../../common/services/market-data.service";
import { ApiService } from "./api.service";
import { SymbolService } from "./services/symbol.service";
import { AuthHttpInterceptor } from "./auth.interceptor";
import { AuthGuard } from "../../common/auth-guard.service";
import { BackendHub } from "./backend-hub";
import { CountryService } from "./country.service";
import { AuthDataStorage } from "../../common/auth-data.storage";
import { VerifyGuard } from "./verify-guard.service";
import { ClientValidationService } from "./client-validation.service";
import { TransactionRouter } from "./transaction-router";
import { OrderHistoryChartWidgetModule } from './components/order-history-chart-widget/order-history-chart-widget.module'

const MODULES = [
    CommonModule,
    HttpClientModule,
    ElementsPipesModule,
    ElementsServicesModule,
    OrderHistoryChartWidgetModule
];

@NgModule({
    imports: [MODULES],
    providers: [
        ApiService,
        AuthGuard,
        VerifyGuard,
        BackendHub,
        CountryService,
        TransactionRouter,
        OrderService,
        SymbolService,
        MarketDataService,
        ClientValidationService,
        AuthDataStorage,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpInterceptor,
            multi: true
        }
    ],
    declarations: [],
    exports: [MODULES]
})
export class SharedModule { }
