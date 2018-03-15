import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AccountCreationComponent} from "../account-creation/account-creation.component";
import {AccountsComponent} from "../accounts.component";
import {AccReviewApprovalComponent} from "../acc-review-approval/acc-review-approval.component";
import {ChangePasswordComponent} from "../change-password/change-password.component";

const appRoutes: Routes = [
  {
    path: "accounts",
    component: AccountsComponent,
    children: [
      {path: "create-account", pathMatch: "full", component: AccountCreationComponent},
      {path: "review-approval", pathMatch: "full", component: AccReviewApprovalComponent},
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
export class AccountsRoutingModule { }
