import { TestBed } from '@angular/core/testing';

import { UpdateStocksService } from './update-stocks.service';

describe('UpdateStocksService', () => {
  let service: UpdateStocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateStocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
