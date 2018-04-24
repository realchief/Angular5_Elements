import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AccountCreationComponent} from "../account-creation/account-creation.component";
import {AccountsComponent} from "../accounts.component";
import {ChangePasswordComponent} from "../change-password/change-password.component";
import {ClientsListComponent} from "../clients-management/clients-list/clients-list.component";

const appRoutes: Routes = [
  {
    path: "accounts",
    component: AccountsComponent,
    children: [
      {path: "create-account", pathMatch: "full", component: AccountCreationComponent},
      {path: "change-password", pathMatch: "full", component: ChangePasswordComponent},
      {path: "clients", component: ClientsListComponent}
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
export class AccountsRoutingModule { }
