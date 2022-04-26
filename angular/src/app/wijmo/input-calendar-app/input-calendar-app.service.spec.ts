import { TestBed } from '@angular/core/testing';

import { InputCalendarAppService } from './input-calendar-app.service';

describe('InputCalendarAppService', () => {
  let service: InputCalendarAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputCalendarAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
