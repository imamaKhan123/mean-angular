import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubCompRolesComponent } from './add-sub-comp-roles.component';

describe('AddSubCompRolesComponent', () => {
  let component: AddSubCompRolesComponent;
  let fixture: ComponentFixture<AddSubCompRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubCompRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubCompRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
