import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFaceTypeComponent } from './manage-face-type.component';

describe('ManageFaceTypeComponent', () => {
  let component: ManageFaceTypeComponent;
  let fixture: ComponentFixture<ManageFaceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFaceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFaceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
