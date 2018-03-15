import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {AccountCreationComponent} from "./account-creation.component";
import {MatInputModule, MatListModule, MatSelectModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule
  ],
  declarations: [AccountCreationComponent],
  exports: [AccountCreationComponent, RouterModule]
})
export class AccountCreationModule { }
