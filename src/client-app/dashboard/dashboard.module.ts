import { NgModule } from "@angular/core";
import { BalancePanelModule } from "./balance-panel/balance-panel.module";
import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { MatGridListModule, MatListModule, MatToolbarModule, MatDialogModule } from "@angular/material";
import { UserOrdersModule } from "./user-orders/user-orders.module";
import { HistoryDataModule } from "./history-data/history-data.module";
import { TopMenuModule } from "../shared/components/top-menu/top-menu.module";

@NgModule({
    imports: [
        SharedModule,
        MatGridListModule,
        MatListModule,
        MatToolbarModule,
        MatDialogModule,
        TopMenuModule,
        UserOrdersModule,
        HistoryDataModule,
        BalancePanelModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
