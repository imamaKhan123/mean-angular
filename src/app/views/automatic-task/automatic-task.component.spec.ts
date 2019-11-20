import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticTaskComponent } from './automatic-task.component';

describe('AutomaticTaskComponent', () => {
  let component: AutomaticTaskComponent;
  let fixture: ComponentFixture<AutomaticTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
