import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCalendarAppSelectionComponent } from './input-calendar-app-selection.component';

describe('InputCalendarAppSelectionComponent', () => {
  let component: InputCalendarAppSelectionComponent;
  let fixture: ComponentFixture<InputCalendarAppSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCalendarAppSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCalendarAppSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
