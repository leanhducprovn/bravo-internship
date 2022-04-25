import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-calendar-app',
  templateUrl: './input-calendar-app.component.html',
  styleUrls: ['./input-calendar-app.component.css'],
})
export class InputCalendarAppComponent implements OnInit {
  currentDate = new Date();
  calendarApp = true;

  constructor() {}

  ngOnInit(): void {}
}
