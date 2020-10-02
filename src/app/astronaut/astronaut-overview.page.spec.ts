import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";
import { AstronautOverviewPage } from "./astronaut-overview.page";

describe("AstronautOverviewPage", () => {
  let component: AstronautOverviewPage;
  let fixture: ComponentFixture<AstronautOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AstronautOverviewPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AstronautOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
