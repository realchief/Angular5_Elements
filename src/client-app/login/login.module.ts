import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { SharedModule } from "../shared/shared.module";
import { MatButtonModule, MatGridListModule, MatInputModule, MatListModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    SharedModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: "login", component: LoginComponent}
    ])
  ],
  declarations: [LoginComponent],
  exports: [RouterModule]
})
export class LoginModule { }
