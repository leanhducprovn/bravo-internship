import { Component, OnDestroy } from '@angular/core';
import { LoggerService } from '../../service/logger.service';

@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.css'],
  providers: [LoggerService],
})
export class SpyComponent implements OnDestroy {
  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];
  constructor(public logger: LoggerService) {}
  ngOnDestroy(): void {}
  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }
  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this.logger.tick();
  }
  reset() {
    this.logger.log('reset');
    this.heroes = [];
    this.logger.tick();
  }
}
