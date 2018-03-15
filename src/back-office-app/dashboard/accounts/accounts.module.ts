import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountsComponent } from "./accounts.component";
import {RouterModule} from "@angular/router";
import {MatButtonModule, MatSidenavModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {AccReviewApprovalModule} from "./acc-review-approval/acc-review-approval.module";
import {AccountCreationModule} from "./account-creation/account-creation.module";
import {ChangePasswordModule} from "./change-password/change-password.module";
import {AccountsRoutingModule} from "./accounts-routing/accounts-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    AccReviewApprovalModule,
    AccountCreationModule,
    ChangePasswordModule,
    AccountsRoutingModule
  ],
  declarations: [AccountsComponent],
  exports: [RouterModule]
})
export class AccountsModule { }
