import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureForFaceComponent } from './procedure-for-face.component';

describe('ProcedureForFaceComponent', () => {
  let component: ProcedureForFaceComponent;
  let fixture: ComponentFixture<ProcedureForFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureForFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureForFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
