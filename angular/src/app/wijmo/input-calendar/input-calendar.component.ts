import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import * as wijmo from '@grapecity/wijmo';
import * as input from '@grapecity/wijmo.input';

import { InputCalendarService } from './input-calendar.service';

@Component({
  selector: 'app-input-calendar',
  templateUrl: './input-calendar.component.html',
  styleUrls: ['./input-calendar.component.css'],
})
export class InputCalendarComponent implements OnInit {
  firstDay!: Date;
  lastDay!: Date;

  private holidays!: { [key: string]: string };

  @ViewChild('theCalendarStyling', { static: true })
  theCalendarStyling!: input.Calendar;

  constructor(private inputCalendarService: InputCalendarService) {
    // Ranges (min/max)
    let curr = new Date();
    // console.log(curr);
    // console.log(curr.getDate());
    // console.log(curr.getDay());
    this.firstDay = new Date(curr.setDate(curr.getDate() - curr.getDay()));
    // console.log(this.firstDay);
    this.lastDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
    // console.log(this.lastDay);

    // Styling
    this.holidays = inputCalendarService.getHolidays();
    // console.log(this.holidays);
  }

  ngOnInit(): void {
    // this.theCalendarStyling.invalidate();
  }

  formatItem(e: input.FormatItemEventArgs) {
    let weekday = e.data.getDay();
    // console.log(weekday);
    let holiday = this.getHoliday(e.data);
    // console.log(holiday);
    wijmo.toggleClass(e.item, 'date-weekend', weekday == 0 || weekday == 6);
    wijmo.toggleClass(e.item, 'date-holiday', holiday != null);
    e.item.title = holiday;
    // console.log(e.item);
  }

  getHoliday(date: Date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let holiday = this.holidays[day + '/' + month];
    return holiday;
  }
}
