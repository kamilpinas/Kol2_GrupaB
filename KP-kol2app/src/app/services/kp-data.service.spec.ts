import { TestBed } from '@angular/core/testing';

import { KPDataService } from './kp-data.service';

describe('KPDataService', () => {
  let service: KPDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KPDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
