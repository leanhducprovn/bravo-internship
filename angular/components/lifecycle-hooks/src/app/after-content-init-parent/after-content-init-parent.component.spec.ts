import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentInitParentComponent } from './after-content-init-parent.component';

describe('AfterContentInitParentComponent', () => {
  let component: AfterContentInitParentComponent;
  let fixture: ComponentFixture<AfterContentInitParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterContentInitParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterContentInitParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
