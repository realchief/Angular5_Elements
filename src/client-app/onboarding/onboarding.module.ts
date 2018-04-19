import { NgModule } from "@angular/core";
import { OnboardingComponent } from "./onboarding.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import {
    MatButtonModule, MatCardModule, MatDatepickerModule, MatGridListModule, MatInputModule, MatSelectModule, MatStepperModule
} from "@angular/material";
import { EmailVerificationComponent } from "./email-verify/email-verify.component";
import { Enable2faComponent } from "./enable-2fa/enable-2fa.component";
import { ReactiveFormsModule } from "@angular/forms";
import { IdentityComponent } from "./identity/identity.component";
import { UploadDocumentsComponent } from "./upload-documents/upload-documents.component";
import { AuthGuard } from "../../common/auth-guard.service";
import { WebcamModule } from "ngx-webcam";
import { HeaderModule } from "../shared/components/header/header.module";
import { FooterModule } from "../shared/components/footer/footer.module";

@NgModule({
    imports: [
        SharedModule,
        MatButtonModule,
        MatStepperModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatGridListModule,
        MatCardModule,
        WebcamModule,
        HeaderModule,
        FooterModule,
        RouterModule.forChild([{ path: "onboarding", component: OnboardingComponent, canActivate: [AuthGuard] }])
    ],
    declarations: [OnboardingComponent, EmailVerificationComponent, Enable2faComponent, IdentityComponent, UploadDocumentsComponent],
    exports: [RouterModule]
})
export class OnboardingModule { }
