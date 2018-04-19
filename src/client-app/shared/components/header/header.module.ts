import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { SharedModule } from "../../shared.module";
import { CreateOrderDialogModule } from "../../../dialog/create-order-dialog/create-order-dialog.module";
import { CurrencySelectorModule } from "../currency-selector/currency-selector.module";

@NgModule({
    imports: [
        SharedModule,
        CreateOrderDialogModule,
        CurrencySelectorModule
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderModule { }
