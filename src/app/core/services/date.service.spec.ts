import { TestBed } from '@angular/core/testing';

import { DateService } from './date.service';

describe('DateService', () => {
  let service: DateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getDateIso8601', () => {
    const mockDateIso = '2022-10-24';
    it('should get date without time', () => {
      const getDate = service.getDateIso8601(new Date(mockDateIso));
      expect(getDate).toEqual(mockDateIso);
      expect(getDate.length).toEqual(10);
    });
  });
});
