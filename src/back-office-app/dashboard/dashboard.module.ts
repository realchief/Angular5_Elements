import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import {AccountsModule} from "./accounts/accounts.module";
import {MatButtonModule, MatGridListModule} from "@angular/material";
import {ClientsManagementModule} from "./clients-management/clients-management.module";
import {AppRoutingModule} from "../app-routing/app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    AccountsModule,
    ClientsManagementModule,
    AppRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
