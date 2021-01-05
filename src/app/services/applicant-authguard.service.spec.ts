import { TestBed } from '@angular/core/testing';

import { ApplicantAuthguardService } from './applicant-authguard.service';

describe('ApplicantAuthguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicantAuthguardService = TestBed.get(ApplicantAuthguardService);
    expect(service).toBeTruthy();
  });
});
