import { TestBed } from '@angular/core/testing';

import { ApplicantActivityService } from './applicant-activity.service';

describe('ApplicantActivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicantActivityService = TestBed.get(ApplicantActivityService);
    expect(service).toBeTruthy();
  });
});
