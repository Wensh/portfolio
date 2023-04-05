import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { MenuOverviewComponent } from "./menu-overview.component";

describe("MenuOverviewComponent", () => {
  let component: MenuOverviewComponent;
  let fixture: ComponentFixture<MenuOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuOverviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
