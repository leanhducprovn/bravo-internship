import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCalendarAppMainComponent } from './input-calendar-app-main.component';

describe('InputCalendarAppMainComponent', () => {
  let component: InputCalendarAppMainComponent;
  let fixture: ComponentFixture<InputCalendarAppMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCalendarAppMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCalendarAppMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
