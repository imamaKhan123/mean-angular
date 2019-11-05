import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubCompUserComponent } from './add-sub-comp-user.component';

describe('AddSubCompUserComponent', () => {
  let component: AddSubCompUserComponent;
  let fixture: ComponentFixture<AddSubCompUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubCompUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubCompUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
