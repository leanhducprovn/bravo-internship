import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';

import { WjCalendar } from '@grapecity/wijmo.angular2.input';

@Component({
  selector: 'app-input-calendar-app-main',
  templateUrl: './input-calendar-app-main.component.html',
  styleUrls: ['./input-calendar-app-main.component.css'],
})
export class InputCalendarAppMainComponent implements OnInit, DoCheck {
  @ViewChild('calendarApp') calendarApp!: WjCalendar;

  curentTime = new Date();
  currentMonth!: number;

  previousMonth!: number;
  currentYear!: number;

  defaultMonth!: number;
  countClick = 1;
  currentSelectionMonth!: number;
  currentSelectionYear!: number;

  constructor() {}

  ngDoCheck() {
    let setHeader = document.getElementsByClassName('wj-header');
    setHeader[0].innerHTML = `
      <td>CN</td>
      <td>T2</td>
      <td>T3</td>
      <td>T4</td>
      <td>T5</td>
      <td>T6</td>
      <td>T7</td>
    `;
  }

  onPreviousMonth() {
    this.defaultMonth = this.curentTime.getMonth();
    this.previousMonth = this.defaultMonth - this.countClick;
    this.calendarApp.displayMonth = new Date();
    this.calendarApp.displayMonth.setMonth(this.previousMonth);
    this.countClick++;
    this.currentSelectionMonth = this.calendarApp.displayMonth.getMonth() + 1;
    this.currentSelectionYear = this.calendarApp.displayMonth.getFullYear();
  }

  onNextMonth() {
    this.defaultMonth = this.curentTime.getMonth();
    this.previousMonth = this.defaultMonth + this.countClick;
    this.calendarApp.displayMonth = new Date();
    this.calendarApp.displayMonth.setMonth(this.previousMonth);
    this.countClick++;
    this.currentSelectionMonth = this.calendarApp.displayMonth.getMonth() + 1;
    this.currentSelectionYear = this.calendarApp.displayMonth.getFullYear();
  }

  ngOnInit(): void {
    this.currentYear = this.curentTime.getFullYear();
  }
}
