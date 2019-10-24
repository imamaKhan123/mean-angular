import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAccountTypesComponent } from './manage-account-types.component';

describe('ManageAccountTypesComponent', () => {
  let component: ManageAccountTypesComponent;
  let fixture: ComponentFixture<ManageAccountTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAccountTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAccountTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
