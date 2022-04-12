import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssWebsiteLayoutComponent } from './css-website-layout.component';

describe('CssWebsiteLayoutComponent', () => {
  let component: CssWebsiteLayoutComponent;
  let fixture: ComponentFixture<CssWebsiteLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssWebsiteLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssWebsiteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
