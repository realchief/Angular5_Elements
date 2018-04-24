import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {ClientsListModule} from "./clients-list/clients-list.module";
import {ClientDetailsModule} from "./client-details/client-details.module";

@NgModule({
  imports: [
    CommonModule,
    ClientsListModule,
    ClientDetailsModule
  ],
  declarations: []
})
export class ClientsManagementModule { }
