import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCustomerRecordsComponent } from './filter-customer-records.component';

describe('FilterCustomerRecordsComponent', () => {
  let component: FilterCustomerRecordsComponent;
  let fixture: ComponentFixture<FilterCustomerRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCustomerRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCustomerRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
