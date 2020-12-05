import { TestBed } from '@angular/core/testing';

import { LocalStorageServiceService } from './LocalStorageService.service';

describe('CheckUserStateService', () => {
  let service: LocalStorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
