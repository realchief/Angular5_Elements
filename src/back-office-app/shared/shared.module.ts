import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiService} from "./api.service";
import {AuthGuard} from "./auth-guard.service";
import {AuthHttpInterceptor} from "./auth.interceptor";
import { ClientVerificationStatusPipe } from "./pipes/client-verification-status.pipe";

const MODULES = [
  CommonModule,
  HttpClientModule,
  //ClientVerificationStatusPipe
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
  declarations: [ClientVerificationStatusPipe],
  exports: [MODULES, ClientVerificationStatusPipe]
})
export class SharedModule { }
