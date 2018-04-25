import { NgModule } from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AddBankComponent} from "./add-bank.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [AddBankComponent],
  exports: [AddBankComponent]
})
export class AddBankModule { }
