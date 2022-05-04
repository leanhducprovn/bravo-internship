import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  ViewChild,
} from '@angular/core';

import { WjCalendar } from '@grapecity/wijmo.angular2.input';
import * as wijmo from '@grapecity/wijmo';
import * as input from '@grapecity/wijmo.input';

@Component({
  selector: 'app-input-calendar-app-main',
  templateUrl: './input-calendar-app-main.component.html',
  styleUrls: ['./input-calendar-app-main.component.css'],
})
export class InputCalendarAppMainComponent
  implements OnInit, DoCheck, AfterViewInit
{
  @ViewChild('calendarApp') calendarApp!: WjCalendar;

  curentTime = new Date();
  currentMonth!: number;
  clickPrevious = 1;
  clickNext = 1;
  currentSelectionMonth!: number;
  currentSelectionYear!: number;
  previousMonth!: number;
  nextMonth!: number;

  check = false;

  constructor() {}

  ngAfterViewInit(): void {
    // this.calendarApp.formatItem.addHandler((s, e) => {
    //   console.log(s, e.data, e.item.textContent);
    // // });
    // this.calendarApp.refreshed.addHandler((s, e) => {
    //   console.log(s, e);
    // });

    this.calendarApp.refreshed.addHandler(() => {
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
    });
  }

  ngDoCheck() {}

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

  onWeekend() {
    if (this.check == false) {
      this.calendarApp.itemFormatter = (date, element) => {
        let day = date.getDay();
        element.style.backgroundColor = day == 0 || day == 6 ? '#ffb9b9' : '';
        element.title = 'Ngày cuối tuần';
      };
      this.check = true;
    } else {
      this.calendarApp.itemFormatter = (date, element) => {
        let day = date.getDay();
        element.style.backgroundColor = day == 0 || day == 6 ? '' : '';
      };
      this.check = false;
    }
  }

  onThisWeek() {
    // let current = new Date();
    // let dayCurrent = current.getDay();
    // let dateCurrent = current.getDate();
    // let monthCurrent = current.getMonth() + 1;
    // let yearCurrent = current.getFullYear();
    // let arr: any[] = [];
    // this.calendarApp.itemFormatter = (date, element) => {
    //   let data = date.getDate();
    //   arr.push(data);
    //   for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == 1) {
    //       for (
    //         let j = i;
    //         j < this.countDays(monthCurrent, yearCurrent) + i;
    //         j++
    //       ) {
    //         if (arr[j] == dateCurrent) {
    //           console.log(j);
    //           console.log(element);
    //         }
    //       }
    //     }
    //   }
    // };
    /////////////////////////////////////////////////////////
    // let current = new Date();
    // let dayCurrent = current.getDay();
    // let dateCurrent = current.getDate();
    // let dateCurrent_1 = dateCurrent;
    // let dateCurrent_2 = dateCurrent;
    // let arrDate: string | any[] = [];
    // let arrDateLeft = [];
    // let arrDateRight = [];
    // for (let i = 0; i < dayCurrent; i++) {
    //   dateCurrent_1--;
    //   arrDateLeft.unshift(dateCurrent_1);
    // }
    // for (let i = 0; i < 6 - dayCurrent; i++) {
    //   dateCurrent_2++;
    //   arrDateRight.push(dateCurrent_2);
    // }
    // arrDateLeft.push(dateCurrent);
    // arrDate = arrDateLeft.concat(arrDateRight);
    // this.calendarApp.formatItem.addHandler((s, e) => {
    //   let data = e.data.getDate();
    //   for (let i = 0; i < arrDate.length; i++) {
    //     if (data == arrDate[i]) {
    //       e.item.className = 'selection';
    //     }
    //   }
    // });
  }

  onLastWeek() {}

  onThisMonth() {
    if (this.check == false) {
      this.calendarApp.value = new Date();
      this.calendarApp.itemFormatter = (date, element) => {
        element.style.backgroundColor = '#c3e4ff';
      };
      this.check = true;
    } else {
      this.calendarApp.itemFormatter = (date, element) => {
        element.style.backgroundColor = '';
      };
      this.check = false;
    }
  }

  onLastMonth() {
    if (this.check == false) {
      let data = new Date();
      data.setMonth(data.getMonth() - 1);
      this.calendarApp.value = data;
      this.calendarApp.itemFormatter = (date, element) => {
        element.style.backgroundColor = '#c3e4ff';
      };
      this.check = true;
    } else {
      this.calendarApp.itemFormatter = (date, element) => {
        element.style.backgroundColor = '';
      };
      this.check = false;
    }
  }

  onClose() {}

  countDays(month: number, year: number) {
    switch (month) {
      case 2:
        if (year % 100 == 0) {
          if (year % 400 == 0) {
            return 29;
            break;
          } else {
            return 28;
            break;
          }
        } else if (year % 4 == 0) {
          return 29;
          break;
        } else {
          return 28;
          break;
        }
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
        break;
      default:
        return 30;
    }
  }

  ngOnInit(): void {}
}
