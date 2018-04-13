import { NgModule } from "@angular/core";
import { TopMenuComponent } from "./top-menu.component";
import { MatButtonModule, MatToolbarModule } from "@angular/material";
import { SharedModule } from "../../shared.module";
import { CreateOrderDialogModule } from "../../../dialog/create-order-dialog/create-order-dialog.module";
import { CurrencySelectorModule } from "../currency-selector/currency-selector.module";

@NgModule({
  imports: [
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    CreateOrderDialogModule,
    CurrencySelectorModule
  ],
  declarations: [TopMenuComponent],
  exports: [TopMenuComponent]
})
export class TopMenuModule { }
