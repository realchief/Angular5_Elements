import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import {AccountsModule} from "./accounts/accounts.module";
import {MatButtonModule, MatGridListModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    AccountsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
