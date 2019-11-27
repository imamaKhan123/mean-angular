import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSecondaryTaskComponent } from './create-secondary-task.component';

describe('CreateSecondaryTaskComponent', () => {
  let component: CreateSecondaryTaskComponent;
  let fixture: ComponentFixture<CreateSecondaryTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSecondaryTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSecondaryTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
