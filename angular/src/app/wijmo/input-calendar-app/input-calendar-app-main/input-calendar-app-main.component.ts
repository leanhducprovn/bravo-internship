import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';

import { WjCalendar } from '@grapecity/wijmo.angular2.input';
import * as wijmo from '@grapecity/wijmo';
import * as input from '@grapecity/wijmo.input';

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
    this.calendarApp.value = new Date();
  }

  onYesterday() {
    let data = new Date();
    data.setDate(data.getDate() - 1);
    this.calendarApp.value = data;
  }

  onThisWeek() {
    // let data = new Date();
    // data.setDate(data.getDate());
    // this.calendarApp.displayMonth = data;
    let current = new Date();
    let dayCurrent = current.getDay();
    let dateCurrent = current.getDate();
    let dateCurrent_1 = dateCurrent;
    let dateCurrent_2 = dateCurrent;
    let arrDate: string | any[] = [];
    let arrDateLeft = [];
    let arrDateRight = [];
    for (let i = 0; i < dayCurrent; i++) {
      dateCurrent_1--;
      arrDateLeft.unshift(dateCurrent_1);
    }
    for (let i = 0; i < 6 - dayCurrent; i++) {
      dateCurrent_2++;
      arrDateRight.push(dateCurrent_2);
    }
    arrDateLeft.push(dateCurrent);
    arrDate = arrDateLeft.concat(arrDateRight);
    this.calendarApp.formatItem.addHandler((s, e) => {
      let data = e.data.getDate();
      for (let i = 0; i < arrDate.length; i++) {
        if (data == arrDate[i]) {
          e.item.className = 'selection';
        }
      }
    });
  }

  onClose() {
    console.log(this.calendarApp);
  }

  ngOnInit(): void {}
}
