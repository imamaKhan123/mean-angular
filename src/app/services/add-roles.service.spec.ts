import { TestBed } from '@angular/core/testing';

import { AddRolesService } from './add-roles.service';

describe('AddRolesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddRolesService = TestBed.get(AddRolesService);
    expect(service).toBeTruthy();
  });
});
