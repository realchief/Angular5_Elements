import { NgModule } from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AddBankComponent} from "./add-bank.component";

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [AddBankComponent],
  exports: [AddBankComponent]
})
export class AddBankModule { }
