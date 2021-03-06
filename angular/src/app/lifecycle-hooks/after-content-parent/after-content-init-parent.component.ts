import { Component } from '@angular/core';

import { LoggerService } from '../../service/logger.service';
@Component({
  selector: 'app-after-content-init-parent',
  templateUrl: './after-content-init-parent.component.html',
  styleUrls: ['./after-content-init-parent.component.css'],
  providers: [LoggerService],
})
export class AfterContentInitParentComponent {
  show = true;

  constructor(public logger: LoggerService) {}

  reset() {
    this.logger.clear();
    // xóa và tải lại AfterContentComponent để tạo lại nó
    this.show = false;
    this.logger.tick_then(() => (this.show = true));
  }
}
