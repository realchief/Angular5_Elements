import { NgModule } from "@angular/core";
import { RegistrationComponent } from "./registration.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatGridListModule, MatInputModule, MatListModule } from "@angular/material";

@NgModule({
  imports: [
    SharedModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: "register", component: RegistrationComponent}
    ])
  ],
  declarations: [RegistrationComponent],
  exports: [RouterModule]
})
export class RegistrationModule { }
