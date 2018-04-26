import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdministrationLayoutComponent } from "./administration-layout/administration-layout.component";
import { AccountCreationComponent } from "./account-creation/account-creation.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [
  {path: "administration", component: AdministrationLayoutComponent, children: [
      {path: "create-account", component: AccountCreationComponent},
      {path: "", pathMatch: "full", redirectTo: "create-account"}
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [AdministrationLayoutComponent, AccountCreationComponent]
})
export class AdministrationModule { }
