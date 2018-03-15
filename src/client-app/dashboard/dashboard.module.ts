import { NgModule } from "@angular/core";
import { BalancePanelModule } from "./balance-panel/balance-panel.module";
import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { MatGridListModule, MatListModule, MatToolbarModule, MatDialogModule } from "@angular/material";
import { BalancePanelComponent } from "./balance-panel/balance-panel.component";
import { TopMenuModule } from "../top-menu/top-menu.module";
import { UserOrdersModule } from "./user-orders/user-orders.module";
import { HistoryDataModule } from "./history-data/history-data.module";

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
