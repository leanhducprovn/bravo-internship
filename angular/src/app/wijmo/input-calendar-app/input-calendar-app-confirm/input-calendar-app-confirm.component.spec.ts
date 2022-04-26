import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCalendarAppConfirmComponent } from './input-calendar-app-confirm.component';

describe('InputCalendarAppConfirmComponent', () => {
  let component: InputCalendarAppConfirmComponent;
  let fixture: ComponentFixture<InputCalendarAppConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCalendarAppConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCalendarAppConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
