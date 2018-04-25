import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BtcDepositPageComponent } from "./btc-deposit-page.component";

describe("BtcDepositPageComponent", () => {
  let component: BtcDepositPageComponent;
  let fixture: ComponentFixture<BtcDepositPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtcDepositPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcDepositPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
