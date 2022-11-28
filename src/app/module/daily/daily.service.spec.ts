import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DailyService } from './daily.service';

describe('DailyService', () => {
  let service: DailyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler
      ]
    });
    service = TestBed.inject(DailyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
