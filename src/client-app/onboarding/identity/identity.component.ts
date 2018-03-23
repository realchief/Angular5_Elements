import {Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../../shared/country.service";
import {Country} from "../../shared/models/country";
import {Subject} from "rxjs/Subject";
import {takeUntil} from "rxjs/operators";
import {ApiService} from "../../shared/api.service";

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

  constructor(private fb: FormBuilder, private countryService: CountryService, private api: ApiService) {}

  ngOnInit() {
    this.countryService.getCountries()
      .pipe(takeUntil(this.ngUnsub))
      .subscribe(x => this.countries = x);

    this.form = this.fb.group({
      "personalParticularsModel": this.fb.group({
        "firstName": this.fb.control("", Validators.required),
        "middleName": this.fb.control(""),
        "lastName": this.fb.control("", Validators.required),
        "bitrthday": this.fb.control("", Validators.required),
        "profession": this.fb.control("", Validators.required),
        "ssn": this.fb.control("")
      }),
      "passportNumber": this.fb.control("", Validators.required),
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
    console.log(this.form.value);
    this.api.post("onboarding/identity", this.form.value)
      .pipe(takeUntil(this.ngUnsub))
      .subscribe(x => {
        model.isVerified = true;
        this.verifyIdentity.emit(model);
      },         err => alert(err));
  }
}
