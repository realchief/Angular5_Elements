import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { AccountsModule } from "./accounts/accounts.module";
import { MatButtonModule, MatGridListModule } from "@angular/material";
import { DepositsModule } from "./deposits/deposits.module";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    AccountsModule,
    DepositsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
