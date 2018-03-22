import { NgModule } from "@angular/core";
import { CurrencySelectorModule } from "../shared/components/currency-selector/currency-selector.module";
import { TopMenuComponent } from "./top-menu.component";
import { SharedModule } from "../shared/shared.module";
import { MatButtonModule, MatToolbarModule } from "@angular/material";
import { CreateOrderDialogModule } from "../dialog/create-order-dialog/create-order-dialog.module";

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
