import { TestBed } from '@angular/core/testing';

import { GetLevelsService } from './get-levels.service';

describe('GetLevelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetLevelsService = TestBed.get(GetLevelsService);
    expect(service).toBeTruthy();
  });
});
