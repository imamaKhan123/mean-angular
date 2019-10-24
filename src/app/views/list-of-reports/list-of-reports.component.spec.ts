import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfReportsComponent } from './list-of-reports.component';

describe('ListOfReportsComponent', () => {
  let component: ListOfReportsComponent;
  let fixture: ComponentFixture<ListOfReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
