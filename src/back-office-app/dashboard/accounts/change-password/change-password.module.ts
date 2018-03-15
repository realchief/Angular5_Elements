import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {ChangePasswordComponent} from "./change-password.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule, MatInputModule, MatListModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [ChangePasswordComponent],
  exports: [ChangePasswordComponent]
})
export class ChangePasswordModule { }
