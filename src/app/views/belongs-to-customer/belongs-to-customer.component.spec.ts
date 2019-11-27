import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelongsToCustomerComponent } from './belongs-to-customer.component';

describe('BelongsToCustomerComponent', () => {
  let component: BelongsToCustomerComponent;
  let fixture: ComponentFixture<BelongsToCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelongsToCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelongsToCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
