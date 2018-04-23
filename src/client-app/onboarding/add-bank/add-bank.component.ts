import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Output, EventEmitter, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { AuthDataStorage } from "../../../common/auth-data.storage";
import { Subject } from "rxjs/Subject";
import { takeUntil } from "rxjs/operators";
import { Country } from "../../shared/models/country";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "../../shared/api.service";
import { CountryService } from "../../shared/services/country.service";
import { RegisterService } from "../../../common/services/registration.service";

@Component({
    selector: "app-add-bank",
    templateUrl: "./add-bank.component.html",
    styleUrls: ["./add-bank.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBankComponent implements OnInit, OnDestroy {

    @Output() verifyBank = new EventEmitter();

    constructor( ) {}

    ngOnInit() {
    }

    onVerifyBank() {
        const model = {
            isVerified: true,
            message: 'Bank not verified'
        }
        this.verifyBank.emit(model);
    }

    ngOnDestroy(): void {
    }
}
