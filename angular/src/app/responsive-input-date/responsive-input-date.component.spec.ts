import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveInputDateComponent } from './responsive-input-date.component';

describe('ResponsiveInputDateComponent', () => {
  let component: ResponsiveInputDateComponent;
  let fixture: ComponentFixture<ResponsiveInputDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveInputDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveInputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
