import { Directive, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from '../../service/logger.service';

let nextId = 1;

@Directive({ selector: '[appSpy]' })
export class SpyDirective implements OnInit, OnDestroy {
  private id = nextId++;

  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logger.log(`Spy #${this.id} onInit`);
  }

  ngOnDestroy() {
    this.logger.log(`Spy #${this.id} onDestroy`);
  }
}
