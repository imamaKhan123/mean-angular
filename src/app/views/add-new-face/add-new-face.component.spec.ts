import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFaceComponent } from './add-new-face.component';

describe('AddNewFaceComponent', () => {
  let component: AddNewFaceComponent;
  let fixture: ComponentFixture<AddNewFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
