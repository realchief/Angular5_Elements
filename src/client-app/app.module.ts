import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import {DatePipe, DecimalPipe} from "@angular/common";
import { RouterModule } from "@angular/router";
import { OnboardingModule } from "./onboarding/onboarding.module";
import { MatNativeDateModule } from "@angular/material";
import { CheckAwatingModule } from "./check-awating/check-awating.module";
import { AuthModule } from "./auth/auth.module";
import {ChatbotModule} from "./chatbot/chatbot.module";
import {SettingsModule} from "./settings/settings.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DepositsModule} from "./deposit/deposits.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
        AuthModule,
        DashboardModule,
        OnboardingModule,
        RouterModule,
        MatNativeDateModule,
        CheckAwatingModule,
        ChatbotModule,
        SettingsModule,
        DepositsModule,
        NgbModule.forRoot()
    ],
    providers: [DecimalPipe, DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
