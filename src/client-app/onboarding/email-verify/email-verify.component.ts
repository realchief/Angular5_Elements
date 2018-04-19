import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Output, EventEmitter, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs/Subject";
import { AuthDataStorage } from "../../../common/auth-data.storage";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ApiService } from "../../shared/api.service";
import { RegisterService } from "../../../common/services/registration.service";

@Component({
    selector: "app-email-verify",
    templateUrl: "./email-verify.component.html",
    styleUrls: ["./email-verify.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailVerificationComponent implements OnInit, OnDestroy {

    private ngUnsub = new Subject();

    @Output() verifyClientEmail = new EventEmitter();

    emailVerifyForm = new FormGroup({
        code: new FormControl()
    });

    constructor(
        private authDataStorage: AuthDataStorage,
        private fb: FormBuilder,
        private registerService: RegisterService) {
    }

    ngOnInit() {
        this.emailVerifyForm = this.fb.group({
            "code": this.fb.control("", [Validators.required]),
        });
    }

    verifyEmail() {
        if (this.emailVerifyForm.invalid) {
            return;
        }
        const model = {
            isVerified: false,
            message: "Cannot verify Client Email"
          };
        this.registerService
            .verifyClientEmail(this.emailVerifyForm.value)
            .pipe(takeUntil(this.ngUnsub))
            .subscribe(res => {
                if (res == null) {
                    model.isVerified = true;
                    this.verifyClientEmail.emit(model);
                }
            }, err => alert(err))
    }

    ngOnDestroy(): void {
    }
}
