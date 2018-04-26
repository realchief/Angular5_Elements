import {Component, OnInit, ChangeDetectionStrategy, Input} from "@angular/core";
import {FileMetadataModel} from "../../../../shared/models/file-metadata-model";

@Component({
  selector: "app-attachment",
  templateUrl: "./attachment.component.html",
  styleUrls: ["./attachment.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttachmentComponent implements OnInit {

  @Input() model: FileMetadataModel;

  constructor() { }

  ngOnInit() {
  }

}
