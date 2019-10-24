import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClentsComponent } from './show-clents.component';

describe('ShowClentsComponent', () => {
  let component: ShowClentsComponent;
  let fixture: ComponentFixture<ShowClentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowClentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowClentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
