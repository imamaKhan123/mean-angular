import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClentsComponent } from './edit-clents.component';

describe('EditClentsComponent', () => {
  let component: EditClentsComponent;
  let fixture: ComponentFixture<EditClentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
