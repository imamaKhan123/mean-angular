import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquireiesComponent } from './inquireies.component';

describe('InquireiesComponent', () => {
  let component: InquireiesComponent;
  let fixture: ComponentFixture<InquireiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquireiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquireiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
