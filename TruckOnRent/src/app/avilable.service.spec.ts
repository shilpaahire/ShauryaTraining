import { TestBed } from '@angular/core/testing';

import { AvilableService } from './avilable.service';

describe('AvilableService', () => {
  let service: AvilableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvilableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
