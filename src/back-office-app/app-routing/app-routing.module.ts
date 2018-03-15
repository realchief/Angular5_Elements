import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";

const appRoutes: Routes = [
  { path: "", pathMatch: "full", component: DashboardComponent}
  ];

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
