import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDateAppComponent } from './input-date-app.component';

describe('InputDateAppComponent', () => {
  let component: InputDateAppComponent;
  let fixture: ComponentFixture<InputDateAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDateAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDateAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
