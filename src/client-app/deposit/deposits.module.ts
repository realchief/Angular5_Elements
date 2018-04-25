import { NgModule } from "@angular/core";
import { DepositPageLayoutComponent } from "./deposit-page-layout/deposit-page-layout.component";
import { FiatDepositPageComponent } from "./fiat-deposit-page/fiat-deposit-page.component";
import { BtcDepositPageComponent } from "./btc-deposit-page/btc-deposit-page.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {HeaderModule} from "../shared/components/header/header.module";
import {ReactiveFormsModule} from "@angular/forms";
import {FooterModule} from "../shared/components/footer/footer.module";

@NgModule({
  imports: [
    SharedModule,
    HeaderModule,
    FooterModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: "deposit", component: DepositPageLayoutComponent, children: [
          {path: "fiat", component: FiatDepositPageComponent},
          {path: "btc", component: BtcDepositPageComponent},
          {path: "", redirectTo: "fiat", pathMatch: "full"}
      ]}
    ])
  ],
  declarations: [DepositPageLayoutComponent, FiatDepositPageComponent, BtcDepositPageComponent]
})
export class DepositsModule { }
