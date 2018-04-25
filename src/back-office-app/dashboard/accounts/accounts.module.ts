import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountsComponent } from "./accounts.component";
import {RouterModule} from "@angular/router";
import {MatButtonModule, MatSidenavModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {AccountCreationModule} from "./account-creation/account-creation.module";
import {ChangePasswordModule} from "./change-password/change-password.module";
import {ClientsManagementModule} from "./clients-management/clients-management.module";
import {AppRoutingModule} from "../../app-routing/app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    AccountCreationModule,
    ChangePasswordModule,
    ClientsManagementModule,
    AppRoutingModule
  ],
  declarations: [AccountsComponent],
  exports: [RouterModule]
})
export class AccountsModule { }
