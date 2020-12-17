import { TestBed } from '@angular/core/testing';

import { BaseServiceeService } from './base-servicee.service';

describe('BaseServiceeService', () => {
  let service: BaseServiceeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseServiceeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
