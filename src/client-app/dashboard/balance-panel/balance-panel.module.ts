import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { BalancePanelComponent } from "./balance-panel.component";

@NgModule({
  imports: [SharedModule],
  declarations: [BalancePanelComponent],
  exports: [BalancePanelComponent]
})
export class BalancePanelModule {}
