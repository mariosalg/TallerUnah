import { TestBed } from '@angular/core/testing';

import { CallHttpService } from './call-http.service';

describe('CallHttpService', () => {
  let service: CallHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
