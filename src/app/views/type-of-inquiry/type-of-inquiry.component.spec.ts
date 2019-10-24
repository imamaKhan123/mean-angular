import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfInquiryComponent } from './type-of-inquiry.component';

describe('TypeOfInquiryComponent', () => {
  let component: TypeOfInquiryComponent;
  let fixture: ComponentFixture<TypeOfInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
