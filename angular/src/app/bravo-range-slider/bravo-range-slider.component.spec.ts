import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BravoRangeSliderComponent } from './bravo-range-slider.component';

describe('BravoRangeSliderComponent', () => {
  let component: BravoRangeSliderComponent;
  let fixture: ComponentFixture<BravoRangeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BravoRangeSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BravoRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
