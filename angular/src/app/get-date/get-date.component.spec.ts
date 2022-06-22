import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDateComponent } from './get-date.component';

describe('GetDateComponent', () => {
  let component: GetDateComponent;
  let fixture: ComponentFixture<GetDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
