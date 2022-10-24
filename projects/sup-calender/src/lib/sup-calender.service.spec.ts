import { TestBed } from '@angular/core/testing';

import { SupCalenderService } from './sup-calender.service';

describe('SupCalenderService', () => {
  let service: SupCalenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupCalenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
