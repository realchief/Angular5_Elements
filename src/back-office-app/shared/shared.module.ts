import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiService} from "./api.service";
import {AuthGuard} from "./auth-guard.service";
import {AuthHttpInterceptor} from "./auth.interceptor";
import {BackendHub} from "./backend-hub";

const MODULES = [
  CommonModule,
  HttpClientModule
];

@NgModule({
  imports: [MODULES],
  providers: [
    ApiService,
    AuthGuard,
    BackendHub,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ],
  declarations: [],
  exports: [MODULES]
})
export class SharedModule { }
