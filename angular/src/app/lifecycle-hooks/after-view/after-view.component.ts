import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';

import { ChildViewComponent } from '../child-view/child-view.component';
import { LoggerService } from '../../service/logger.service';

@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.css'],
})
export class AfterViewComponent implements AfterViewChecked, AfterViewInit {
  comment = '';
  private prevHero = '';

  // Truy vấn cho VIEW con của `ChildViewComponent`
  @ViewChild(ChildViewComponent) viewChild!: ChildViewComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterView constructor');
  }

  ngAfterViewInit() {
    // viewChild được đặt sau khi chế độ xem đã được khởi tạo
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked() {
    // viewChild được cập nhật sau khi chế độ xem đã được kiểm tra
    if (this.prevHero === this.viewChild.hero) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  // Đại diện này cho logic nghiệp vụ thực sự đặt bình luận
  private doSomething() {
    const c = this.viewChild.hero.length > 10 ? "That's a long name" : '';
    if (c !== this.comment) {
      // Chờ đánh dấu vì chế độ xem của thành phần đã được kiểm tra
      this.logger.tick_then(() => (this.comment = c));
    }
  }

  private logIt(method: string) {
    const child = this.viewChild;
    const message = `${method}: ${child ? child.hero : 'no'} child view`;
    this.logger.log(message);
  }
}
