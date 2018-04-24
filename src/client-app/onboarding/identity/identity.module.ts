import { NgModule } from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {IdentityComponent} from "./identity.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [IdentityComponent],
  exports: [IdentityComponent]
})
export class IdentityModule { }
