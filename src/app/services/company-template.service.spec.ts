import { TestBed } from '@angular/core/testing';

import { CompanyTemplateService } from './company-template.service';

describe('CompanyTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyTemplateService = TestBed.get(CompanyTemplateService);
    expect(service).toBeTruthy();
  });
});
