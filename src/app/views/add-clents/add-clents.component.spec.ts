import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClentsComponent } from './add-clents.component';

describe('AddClentsComponent', () => {
  let component: AddClentsComponent;
  let fixture: ComponentFixture<AddClentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
