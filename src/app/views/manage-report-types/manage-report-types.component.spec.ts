import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReportTypesComponent } from './manage-report-types.component';

describe('ManageReportTypesComponent', () => {
  let component: ManageReportTypesComponent;
  let fixture: ComponentFixture<ManageReportTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageReportTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageReportTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
