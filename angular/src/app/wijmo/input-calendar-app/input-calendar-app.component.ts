import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  ViewChild,
} from '@angular/core';

import { WjCalendar } from '@grapecity/wijmo.angular2.input';
import * as wijmo from '@grapecity/wijmo';
@Component({
  selector: 'app-input-calendar-app',
  templateUrl: './input-calendar-app.component.html',
  styleUrls: ['./input-calendar-app.component.css'],
})
export class InputCalendarAppComponent
  implements OnInit, AfterViewInit, DoCheck
{
  @ViewChild('calendarApp') calendarApp!: WjCalendar;

  currentDate = new Date();

  dateSelected!: any;
  styleSelected!: any;

  constructor() {}

  ngDoCheck(): void {}

  ngAfterViewInit(): void {}

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

  setStyle(style: any) {
    this.styleSelected = style;
  }

  styling(styleSelected: any) {
    switch (styleSelected) {
      case 'backgroundImage':
        return {
          'background-repeat': 'no-repeat, repeat',
          'background-size': 'cover',
          'background-image':
            'url(../../../../../assets/images/hand-painted-watercolor-pastel-sky-background.webp)',
        };
      case 'greenBackground':
        return {
          'background-color': '#c7f9cc',
        };
      case 'pinkBackground':
        return {
          'background-color': '#fde2e4',
        };
    }
    return 0;
  }

  ngOnInit(): void {
    document.body.addEventListener('click', this.click);
  }

  click(e: any) {
    var x = e.x;
    var y = e.y;
    console.log(x, y);
  }
}
