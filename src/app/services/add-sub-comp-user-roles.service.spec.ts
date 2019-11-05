import { TestBed } from '@angular/core/testing';

import { AddSubCompUserRolesService } from './add-sub-comp-user-roles.service';

describe('AddSubCompUserRolesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddSubCompUserRolesService = TestBed.get(AddSubCompUserRolesService);
    expect(service).toBeTruthy();
  });
});
