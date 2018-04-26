import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientDetailsComponent } from "./client-details.component";
import { AttachmentComponent } from "./attachment/attachment.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientDetailsComponent, AttachmentComponent]
})
export class ClientDetailsModule { }
