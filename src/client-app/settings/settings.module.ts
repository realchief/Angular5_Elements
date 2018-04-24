import { NgModule } from "@angular/core";
import { PersonalParticularsComponent } from "./personal-particulars/personal-particulars.component";
import { SettingsLayoutComponent } from "./settings-layout/settings-layout.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {HeaderModule} from "../shared/components/header/header.module";
import { BankAccountSettingsComponent } from "./bank-account-settings/bank-account-settings.component";
import { NotificationSettingsComponent } from "./notification-settings/notification-settings.component";
import {IdentityModule} from "../onboarding/identity/identity.module";

@NgModule({
  imports: [
    SharedModule,
    HeaderModule,
    IdentityModule,
    RouterModule.forChild([
      {path: "settings", component: SettingsLayoutComponent, children: [
          {path: "profile", component: PersonalParticularsComponent},
          {path: "bank-accounts", component: BankAccountSettingsComponent},
          {path: "notifications", component: NotificationSettingsComponent},
          {path: "", pathMatch: "full", redirectTo: "profile"}
      ]}
    ])
  ],
  declarations: [PersonalParticularsComponent, SettingsLayoutComponent, BankAccountSettingsComponent, NotificationSettingsComponent]
})
export class SettingsModule { }
