import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ApiService, TOKEN_STORAGE_KEY } from "../shared/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs/Subject";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  private ngUnsub = new Subject();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService) { }

  ngOnInit() {
    this.form = this.fb.group({
      "email": this.fb.control("", [Validators.required, Validators.email]),
      "name": this.fb.control("", [Validators.required]),
      "password": this.fb.control("", [Validators.required]),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.api
      .post("register", this.form.value)
      .pipe(
        takeUntil(this.ngUnsub)
      )
      .subscribe(this.onSuccessfulRegistration.bind(this), err => alert(err));
  }

  onSuccessfulRegistration(token: string) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
    this.router.navigate(["/"]);
  }
}
