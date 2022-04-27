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

  clickPrevious = 1;
  clickNext = 1;
  currentSelectionMonth!: number;
  currentSelectionYear!: number;

  previousMonth!: number;
  nextMonth!: number;

  constructor() {}

  ngDoCheck() {
    let setHeader = document.getElementsByClassName('wj-header');
    if (setHeader[0]) {
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
  }

  onPreviousMonth() {
    if (this.nextMonth) {
      this.previousMonth = this.nextMonth - 1;
      this.calendarApp.displayMonth = new Date();
      this.calendarApp.displayMonth.setMonth(this.previousMonth);
      this.nextMonth--;
      this.currentSelectionMonth = this.calendarApp.displayMonth.getMonth() + 1;
      this.currentSelectionYear = this.calendarApp.displayMonth.getFullYear();
    } else {
      this.currentMonth = this.curentTime.getMonth();
      this.previousMonth = this.currentMonth - this.clickPrevious;
      let data = new Date();
      data.setMonth(this.previousMonth);
      this.calendarApp.displayMonth = data;
      this.clickPrevious++;
      this.currentSelectionMonth = this.calendarApp.displayMonth.getMonth() + 1;
      this.currentSelectionYear = this.calendarApp.displayMonth.getFullYear();
    }
  }

  onNextMonth() {
    if (this.previousMonth) {
      this.nextMonth = this.previousMonth + 1;
      this.calendarApp.displayMonth = new Date();
      this.calendarApp.displayMonth.setMonth(this.nextMonth);
      this.previousMonth++;
      this.currentSelectionMonth = this.calendarApp.displayMonth.getMonth() + 1;
      this.currentSelectionYear = this.calendarApp.displayMonth.getFullYear();
    } else {
      this.currentMonth = this.curentTime.getMonth();
      this.nextMonth = this.currentMonth + this.clickNext;
      let data = new Date();
      data.setMonth(this.nextMonth);
      this.calendarApp.displayMonth = data;
      this.clickNext++;
      this.currentSelectionMonth = this.calendarApp.displayMonth.getMonth() + 1;
      this.currentSelectionYear = this.calendarApp.displayMonth.getFullYear();
    }
  }

  onToday() {
    console.log(this.calendarApp.value);
  }

  ngOnInit(): void {}
}
