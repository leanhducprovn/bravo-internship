import { Component, ViewChild } from '@angular/core';
import { DoCheckComponent } from '../do-check/do-check.component';

import { Hero } from '../hero/hero';
@Component({
  selector: 'app-do-check-parent',
  templateUrl: './do-check-parent.component.html',
  styleUrls: ['./do-check-parent.component.css'],
})
export class DoCheckParentComponent {
  hero!: Hero;
  power = '';
  title = 'DoCheck';
  @ViewChild(DoCheckComponent) childView!: DoCheckComponent;

  constructor() {
    this.reset();
  }

  reset() {
    this.hero = new Hero('Lê Anh Đức');
    this.power = 'web development';
    if (this.childView) {
      this.childView.reset();
    }
  }
}
