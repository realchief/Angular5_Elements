import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../client-app/shared/shared.module";
import {MatButtonModule, MatGridListModule, MatInputModule, MatListModule} from "@angular/material";

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
export class LoginModule {
}
