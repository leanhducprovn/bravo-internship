import { Component, OnInit, ViewChild } from '@angular/core';

import { WjCalendar } from '@grapecity/wijmo.angular2.input';

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

  ngOnInit(): void {}
}
