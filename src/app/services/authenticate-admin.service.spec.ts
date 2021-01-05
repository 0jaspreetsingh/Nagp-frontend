import { TestBed } from '@angular/core/testing';

import { AuthenticateAdminService } from './authenticate-admin.service';

describe('AuthenticateAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticateAdminService = TestBed.get(AuthenticateAdminService);
    expect(service).toBeTruthy();
  });
});
