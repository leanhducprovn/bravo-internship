import { Component } from '@angular/core';

import { LoggerService } from '../logger.service';
@Component({
  selector: 'app-after-content-init-parent',
  // templateUrl: './after-content-init-parent.component.html',
  styleUrls: ['./after-content-init-parent.component.css'],
  template:
    `
  <div class="parent">
    <h2>AfterContent</h2>

    <div *ngIf="show">` +
    `<after-content>
        <app-child></app-child>
      </after-content>` +
    `</div>

    <div class="info">
      <h3>AfterContent Logs</h3>
      <button type="button" (click)="reset()">Reset</button>
      <div *ngFor="let msg of logger.logs" class="log">{{msg}}</div>
    </div>
  </div>
  `,
  providers: [LoggerService],
})
export class AfterContentInitParentComponent {
  show = true;

  constructor(public logger: LoggerService) {}

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterContentComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => (this.show = true));
  }
}
