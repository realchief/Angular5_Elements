import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiService} from "./api.service";
import {AuthGuard} from "./auth-guard.service";
import {AuthHttpInterceptor} from "./auth.interceptor";

const MODULES = [
  CommonModule,
  HttpClientModule
];

@NgModule({
  imports: [MODULES],
  providers: [
    ApiService,
    AuthGuard,
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
