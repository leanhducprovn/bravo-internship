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
  currentSelectionMonth!: number;
  previousMonth!: number;
  currentYear!: number;

  countClick = 1;

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
    this.calendarApp.displayMonth = new Date();
    this.currentMonth = this.curentTime.getMonth();
    this.previousMonth = this.currentMonth - this.countClick;
    this.calendarApp.displayMonth.setMonth(this.previousMonth);
    console.log(this.countClick++);
  }

  onNextMonth() {}

  ngOnInit(): void {
    this.currentYear = this.curentTime.getFullYear();
  }
}
