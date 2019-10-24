import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFaceTypesComponent } from './manage-face-types.component';

describe('ManageFaceTypesComponent', () => {
  let component: ManageFaceTypesComponent;
  let fixture: ComponentFixture<ManageFaceTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFaceTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFaceTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
