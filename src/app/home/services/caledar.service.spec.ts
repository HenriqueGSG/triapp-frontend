import { TestBed } from '@angular/core/testing';

import { CaledarService } from './caledar.service';

describe('CaledarService', () => {
  let service: CaledarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaledarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
