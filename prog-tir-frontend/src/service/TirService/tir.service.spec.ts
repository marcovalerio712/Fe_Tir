import { TestBed } from '@angular/core/testing';

import { TirService } from './tir.service';

describe('TirService', () => {
  let service: TirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
