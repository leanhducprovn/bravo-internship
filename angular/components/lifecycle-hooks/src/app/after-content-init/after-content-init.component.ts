import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
} from '@angular/core';

import { ChildComponent } from '../child/child.component';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-after-content-init',
  templateUrl: './after-content-init.component.html',
  styleUrls: ['./after-content-init.component.css'],
})
export class AfterContentInitComponent
  implements AfterContentChecked, AfterContentInit
{
  private prevHero = '';
  comment = '';

  // Query for a CONTENT child of type `ChildComponent`
  @ContentChild(ChildComponent) contentChild!: ChildComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterContent constructor');
  }

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    this.comment =
      this.contentChild.hero.length > 10 ? "That's a long name" : '';
  }

  private logIt(method: string) {
    const child = this.contentChild;
    const message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }
  // ...
}
