import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientsListComponent } from "./clients-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ClientsListComponent]
})
export class ClientsListModule { }
