import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupProductReportComponent } from './setup-product-report.component';

describe('SetupProductReportComponent', () => {
  let component: SetupProductReportComponent;
  let fixture: ComponentFixture<SetupProductReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupProductReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupProductReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
