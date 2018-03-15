import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from "@angular/core";
import {ApiService} from "../../../shared/api.service";
import {Subject} from "rxjs/Subject";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  form: FormGroup;

  private ngUnsub = new Subject();

  constructor(
    private fb: FormBuilder,
    private api: ApiService) { }

  ngOnInit() {
    this.form = this.fb.group({
      "oldPassword": this.fb.control("", [Validators.required]),
      "newPassword": this.fb.control("", [Validators.required]),
      "confirmNewPassword": this.fb.control("", [Validators.required])
    });
  }

  change() {
  }

  ngOnDestroy(): void {
    this.ngUnsub.next();
    this.ngUnsub.complete();
  }
}
