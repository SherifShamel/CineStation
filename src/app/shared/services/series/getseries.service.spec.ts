import { TestBed } from '@angular/core/testing';

import { GetseriesService } from './getseries.service';

describe('GetseriesService', () => {
  let service: GetseriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetseriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
