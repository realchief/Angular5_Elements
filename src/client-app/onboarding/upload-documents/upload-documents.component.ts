import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, ChangeDetectorRef, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { AuthDataStorage } from "../../../common/auth-data.storage";
import { FileUpload } from "../../shared/models/file-upload";
import { ApiService } from "../../shared/api.service";
import { Subject } from "rxjs/Subject";
import { takeUntil } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { WebcamImage } from "ngx-webcam";
import { ClientValidationService } from "../../shared/services/client-validation.service";

@Component({
    selector: "app-upload-documents",
    templateUrl: "./upload-documents.component.html",
    styleUrls: ["./upload-documents.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadDocumentsComponent implements OnInit, OnDestroy {
    @Output() startCheck = new EventEmitter();
    hasPassport: boolean;
    hasAddressProof: boolean;
    addressProof: FileUpload = null;
    passport: FileUpload = null;
    showWebcam = false;
    private ngUnsub = new Subject();
    private trigger: Subject<void> = new Subject<void>();

    constructor(private cd: ChangeDetectorRef,
        private api: ApiService,
        private validService: ClientValidationService,
        private router: Router,
        private authDataStorage: AuthDataStorage,) { }

    ngOnInit() {

        this.validService.getModel()
            .pipe(takeUntil(this.ngUnsub))
            .subscribe(data => {
                this.hasPassport = data.hasPhotoId;
                this.hasAddressProof = data.hasUploadedDocument;
                this.cd.detectChanges();
            }, err => alert(err));
    }

    getAddressProof(event) {
        const files = event.target.files;
        const file = files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.addressProof = new FileUpload();
            this.addressProof.documentType = "utility_bill_(other)";
            this.addressProof.contentType = file.type;
            this.addressProof.fileName = file.name;
            this.addressProof.base64 = btoa(reader.result);
            this.cd.detectChanges();
        };
        if (file && files) {
            reader.readAsBinaryString(file);
        }
    }

    getPassportFromFile(event) {
        const files = event.target.files;
        const file = files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.passport = new FileUpload();
            this.passport.documentType = "passport";
            this.passport.contentType = file.type;
            this.passport.fileName = file.name;
            this.passport.base64 = btoa(reader.result);
            this.cd.detectChanges();
        };
        if (file && files) {
            reader.readAsBinaryString(file);
        }
    }

    getPassportFromWebcam(event: WebcamImage) {
        this.passport = new FileUpload();
        this.passport.documentType = "passport";
        this.passport.contentType = "image/jpeg";
        this.passport.fileName = "passport.jpg";
        this.passport.base64 = event.imageAsBase64;
        this.toggleWebcam();
        this.cd.detectChanges();
    }

    uploadDocument(document: FileUpload) {
        if (!(document && document.base64)) {
            return;
        }

        this.api.post("onboarding/document", document)
            .pipe(takeUntil(this.ngUnsub))
            .subscribe(x => {
                if (document.documentType === "passport") {
                    this.hasPassport = true;
                } else {
                    this.hasAddressProof = true;
                }
                this.cd.detectChanges();
            }, err => alert(err));
    }

    onStartCheck() {
        // if (!(this.hasPassport && this.hasAddressProof)) {
        //     return;
        // }
        const model = {
            isVerified: false,
            message: "Starting check error"
        };
        this.authDataStorage.unsetToken();
        this.router.navigate(["/"]);
        // this.api.post("onboarding/run-check", null)
        //     .pipe(takeUntil(this.ngUnsub))
        //     .subscribe(x => {
        //         model.isVerified = true;
        //         this.startCheck.emit(model);
        //     }, err => alert(err));
    }

    toggleWebcam() {
        this.showWebcam = !this.showWebcam;
    }

    public triggerSnapshot(): void {
        this.trigger.next();
    }

    public get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }

    ngOnDestroy(): void {
        this.ngUnsub.next();
        this.ngUnsub.complete();
        this.trigger.next();
        this.trigger.complete();
    }
}
