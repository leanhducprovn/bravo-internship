import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexPropertyComponent } from './flex-property.component';

describe('FlexPropertyComponent', () => {
  let component: FlexPropertyComponent;
  let fixture: ComponentFixture<FlexPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
