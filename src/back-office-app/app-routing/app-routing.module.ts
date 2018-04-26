import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AuthGuard } from "../shared/auth-guard.service";
import {AccountsComponent} from "../dashboard/accounts/accounts.component";
import {ClientsListComponent} from "../dashboard/clients-management/clients-list/clients-list.component";
import {ChangePasswordComponent} from "../dashboard/accounts/change-password/change-password.component";
import {AccountCreationComponent} from "../dashboard/accounts/account-creation/account-creation.component";
import {ClientDetailsComponent} from "../dashboard/clients-management/client-details/client-details.component";

const appRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: DashboardComponent,
    canActivate: [AuthGuard] // TODO add Verify Guard
  },
  {path: "clients", component: ClientsListComponent},
  {path: "clients/:id", component: ClientDetailsComponent},
  {
    path: "accounts",
    component: AccountsComponent,
    children: [
      {path: "create-account", pathMatch: "full", component: AccountCreationComponent},
      {path: "change-password", pathMatch: "full", component: ChangePasswordComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
