import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Country } from "../../shared/models/country";
import { Subject } from "rxjs/Subject";
import { takeUntil } from "rxjs/operators";
import { ApiService } from "../../shared/api.service";
import { CountryService } from "../../shared/services/country.service";

@Component({
    selector: "app-identity",
    templateUrl: "./identity.component.html",
    styleUrls: ["./identity.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdentityComponent implements OnInit {
    form: FormGroup;
    countries: Country[];
    ngUnsub = new Subject();
    @Output() verifyIdentity = new EventEmitter();

    constructor(private fb: FormBuilder, private countryService: CountryService, private api: ApiService) { }

    ngOnInit() {
        this.countryService.getCountries()
            .pipe(takeUntil(this.ngUnsub))
            .subscribe(x => this.countries = x);

        this.form = this.fb.group({
            "personalParticularsModel": this.fb.group({
                "firstName": this.fb.control("", Validators.required),
                "middleName": this.fb.control(""),
                "lastName": this.fb.control("", Validators.required),
                "birthday": this.fb.control("", Validators.required),
                "gender": this.fb.control("", Validators.required),
                "profession": this.fb.control(""),
                "ssn": this.fb.control(""),
                "placeOfBirthCountryId": this.fb.control("", Validators.required),
                "citizenshipCountryId": this.fb.control("", Validators.required),
            }),
            "passportNumber": this.fb.control("123", Validators.required),
            "clientAddressModel": this.fb.group({
                "addressData": this.fb.group({
                    "line1": this.fb.control("", Validators.required),
                    "line2": this.fb.control(""),
                    "city": this.fb.control("", Validators.required),
                    "postalCode": this.fb.control("", Validators.required),
                    "stateProvidence": this.fb.control(""),
                    "countryId": this.fb.control("", Validators.required)
                }),
                "addressType": this.fb.control(1, Validators.required)
            })
        });
    }

    onVerifyIdentity() {
        if (this.form.invalid) {
            return;
        }
        const model = {
            isVerified: false,
            message: "Cannot create identity"
        };
        this.api.post("onboarding/identity", this.form.value)
            .pipe(takeUntil(this.ngUnsub))
            .subscribe(res => {
                if (res == null) {
                    model.isVerified = true;
                    this.verifyIdentity.emit(model);
                }
            }, err => alert(err));
    }
}
