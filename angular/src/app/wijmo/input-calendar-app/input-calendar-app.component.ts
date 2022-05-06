import { Component, OnInit, ViewChild } from '@angular/core';

import { WjCalendar } from '@grapecity/wijmo.angular2.input';
import * as wijmo from '@grapecity/wijmo';

import { InputCalendarAppMainComponent } from './input-calendar-app-main/input-calendar-app-main.component';
@Component({
  selector: 'app-input-calendar-app',
  templateUrl: './input-calendar-app.component.html',
  styleUrls: ['./input-calendar-app.component.css'],
})
export class InputCalendarAppComponent implements OnInit {
  @ViewChild('calendarApp') calendarApp!: WjCalendar;

  currentDate = new Date();

  dateSelected!: any;

  constructor() {}

  eventSelected($event: any) {
    this.dateSelected = $event;
  }

  private _culture = 'en';

  get culture(): string {
    return this._culture;
  }

  set culture(value: string) {
    if (this._culture != value) {
      this._culture = value;
      this._loadCulture(value);
    }
  }

  formatDate(time: any, format: string) {
    return wijmo.Globalize.format(time, format);
  }

  private _loadCulture(culture: string) {
    let url = `../../../assets/js/wijmo.cultures/wijmo.culture.${culture}.js`,
      scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
      let script = scripts[i];
      if (script.src.indexOf('/cultures/wijmo.culture.') > -1) {
        if (script.parentElement != null) {
          script.parentElement.removeChild(script);
        }
        break;
      }
    }
    let script = document.createElement('script');
    script.onload = () => wijmo.Control.invalidateAll();
    script.src = url;
    document.head.appendChild(script);
  }

  ngOnInit(): void {}
}
