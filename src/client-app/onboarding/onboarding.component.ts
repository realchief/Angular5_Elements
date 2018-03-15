import {Component, OnInit, ChangeDetectionStrategy, ViewChild, OnDestroy, ChangeDetectorRef, DoCheck} from "@angular/core";
import {MatStepper} from "@angular/material";
import {ClientValidationService} from "../shared/client-validation.service";
import {Subject} from "rxjs/Subject";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: "app-onboarding",
  templateUrl: "./onboarding.component.html",
  styleUrls: ["./onboarding.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnboardingComponent implements OnInit, OnDestroy {
  @ViewChild("stepper") stepper: MatStepper;
  private ngUnsub = new Subject();
  hasUploadedDocument: boolean;
  hasPhotoId: boolean;

  constructor(private validService: ClientValidationService) { }

  ngOnInit() {
    this.validService.getStep()
      .pipe(takeUntil(this.ngUnsub))
      .subscribe(step => {
        for (let i = 0; i < step; i++) {
          this.stepper.next();
        }
      },err => alert(err));
  }

  toNextStep(event: any) {
    if (event.isVerified) {
      this.stepper.next();
    } else {
      alert(event.message);
    }
  }

  ngOnDestroy(): void {
    this.ngUnsub.next();
    this.ngUnsub.complete();
  }
}
