import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTypesOfCompanyComponent } from './manage-types-of-company.component';

describe('ManageTypesOfCompanyComponent', () => {
  let component: ManageTypesOfCompanyComponent;
  let fixture: ComponentFixture<ManageTypesOfCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTypesOfCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTypesOfCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
