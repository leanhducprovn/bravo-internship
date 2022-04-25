import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCalendarAppComponent } from './input-calendar-app.component';

describe('InputCalendarAppComponent', () => {
  let component: InputCalendarAppComponent;
  let fixture: ComponentFixture<InputCalendarAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCalendarAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCalendarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
