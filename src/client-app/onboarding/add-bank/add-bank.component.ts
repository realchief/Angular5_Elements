import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Country } from "../../shared/models/country";
import { Subject } from "rxjs/Subject";
import { takeUntil } from "rxjs/operators";
import { ApiService } from "../../shared/api.service";
import { CountryService } from "../../shared/services/country.service";

@Component({
    selector: "app-add-bank",
    templateUrl: "./add-bank.component.html",
    styleUrls: ["./add-bank.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBankComponent implements OnInit, OnDestroy {

    form: FormGroup;
    countries: Country[];
    ngUnsub = new Subject();
    @Output() verifyBank = new EventEmitter();

    constructor(private fb: FormBuilder, private countryService: CountryService, private api: ApiService) { }

    ngOnInit() {
        this.countryService.getCountries()
            .pipe(takeUntil(this.ngUnsub))
            .subscribe(x => this.countries = x);

        this.form = this.fb.group({
            "clientId": this.fb.control(0, Validators.required),
            "name": this.fb.control("", Validators.required),
            "isVerified": this.fb.control(false, Validators.required),
            "isDefault": this.fb.control(true, Validators.required),
            "accountHolder": this.fb.control("", Validators.required),
            "accountNumber": this.fb.control("", Validators.required),
            "iban": this.fb.control("iban", Validators.required),
            "swiftCode": this.fb.control("", Validators.required),
            "bankId": this.fb.control(0, Validators.required),
            "clearingCode": this.fb.control("", Validators.required),
            "countryCode": this.fb.control("", Validators.required),
            "dateFrom": this.fb.control("2018-04-23T20:35:33.315Z", Validators.required),
            "dateTo": this.fb.control("2018-04-23T20:35:33.315Z", Validators.required)
        });
    }

    addBankAccount() {
        if (this.form.invalid) {
            return;
        }
        const model = {
            isVerified: false,
            message: "Cannot create Bank"
        };
        this.api.post("onboarding/add-bank-account", this.form.value)
            .pipe(takeUntil(this.ngUnsub))
            .subscribe(res => {
                if (res == null) {
                    model.isVerified = true;
                    this.verifyBank.emit(model);
                }
            }, err => alert(err));
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
