import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTemplateComponent } from './set-template.component';

describe('SetTemplateComponent', () => {
  let component: SetTemplateComponent;
  let fixture: ComponentFixture<SetTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
