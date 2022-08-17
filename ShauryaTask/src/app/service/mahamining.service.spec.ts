import { TestBed } from '@angular/core/testing';

import { MahaminingService } from './mahamining.service';

describe('MahaminingService', () => {
  let service: MahaminingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MahaminingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
