import { TestBed } from '@angular/core/testing';

import { CommonOpsService } from './common-ops.service';

describe('CommonOpsService', () => {
  let service: CommonOpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonOpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
