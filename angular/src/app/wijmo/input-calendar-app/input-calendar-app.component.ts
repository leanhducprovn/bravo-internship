import { Component, OnInit } from '@angular/core';
import * as input from '@grapecity/wijmo.input';

@Component({
  selector: 'app-input-calendar-app',
  templateUrl: './input-calendar-app.component.html',
  styleUrls: ['./input-calendar-app.component.css'],
})
export class InputCalendarAppComponent implements OnInit {
  currentDate = new Date();

  constructor() {}

  ngOnInit(): void {}
}
