import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClientTypesComponent } from './manage-client-types.component';

describe('ManageClientTypesComponent', () => {
  let component: ManageClientTypesComponent;
  let fixture: ComponentFixture<ManageClientTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageClientTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClientTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
