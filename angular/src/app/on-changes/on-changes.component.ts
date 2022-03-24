import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Hero } from '../hero/hero';
@Component({
  selector: 'app-on-changes',
  templateUrl: 'on-changes.component.html',
  styleUrls: ['on-changes.component.css'],
})
export class OnChangesComponent implements OnChanges {
  @Input() hero!: Hero;
  @Input() power = '';

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
  }

  reset() {
    this.changeLog = [];
  }
}
