import { TestBed } from '@angular/core/testing';

import { InputCalendarService } from './input-calendar.service';

describe('InputCalendarService', () => {
  let service: InputCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
