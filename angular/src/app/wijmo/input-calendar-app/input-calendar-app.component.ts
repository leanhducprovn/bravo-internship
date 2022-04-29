import { Component, OnInit, ViewChild } from '@angular/core';

import { WjCalendar } from '@grapecity/wijmo.angular2.input';

@Component({
  selector: 'app-input-calendar-app',
  templateUrl: './input-calendar-app.component.html',
  styleUrls: ['./input-calendar-app.component.css'],
})
export class InputCalendarAppComponent implements OnInit {
  @ViewChild('calendarApp') calendarApp!: WjCalendar;

  currentDate = new Date();

  constructor() {}

  ngOnInit(): void {}
}
