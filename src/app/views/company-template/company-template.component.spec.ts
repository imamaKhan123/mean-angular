import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTemplateComponent } from './company-template.component';

describe('CompanyTemplateComponent', () => {
  let component: CompanyTemplateComponent;
  let fixture: ComponentFixture<CompanyTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
