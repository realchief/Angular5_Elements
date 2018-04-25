import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ElementsPipesModule } from "../../common/pipes/elements-pipes.module";
import { ElementsServicesModule } from "../../common/services/elements-services.module";
import { OrderService } from "../../common/services/orders.service";
import { MarketDataService } from "../../common/services/market-data.service";
import { ApiService } from "./api.service";
import { SymbolService } from "./services/symbol.service";
import { AuthHttpInterceptor } from "./auth.interceptor";
import { AuthGuard } from "../../common/auth-guard.service";
import { AuthDataStorage } from "../../common/auth-data.storage";
import { VerifyGuard } from "./verify-guard.service";
import { TransactionRouter } from "./transaction-router";
import { OrderHistoryChartWidgetModule } from "./components/order-history-chart-widget/order-history-chart-widget.module";
import { ClientValidationService } from "./services/client-validation.service";
import { CountryService } from "./services/country.service";
import { BankService } from "./services/bank.service";
import {ClientService} from "../../common/services/client.service";

const MODULES = [
    CommonModule,
    HttpClientModule,
    ElementsPipesModule,
    ElementsServicesModule,
    OrderHistoryChartWidgetModule,
];

@NgModule({
    imports: [MODULES],
    providers: [
        ApiService,
        AuthGuard,
        ClientService,
        VerifyGuard,
        CountryService,
        BankService,
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
