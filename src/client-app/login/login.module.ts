import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: "login", component: LoginComponent}
    ])
  ],
  declarations: [LoginComponent],
  exports: [RouterModule]
})
export class LoginModule { }
