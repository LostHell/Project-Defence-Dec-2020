import { TestBed } from '@angular/core/testing';

import { CheckUserStateService } from './check-user-state.service';

describe('CheckUserStateService', () => {
  let service: CheckUserStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckUserStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
