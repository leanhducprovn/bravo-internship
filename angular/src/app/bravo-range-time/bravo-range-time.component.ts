import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bravo-range-time',
  templateUrl: './bravo-range-time.component.html',
  styleUrls: ['./bravo-range-time.component.css'],
})
export class BravoRangeTimeComponent implements OnInit {
  month = true;
  quarter = false;
  year = false;
  time = new Date();
  min!: Date;
  max!: Date;

  constructor() {}

  ngOnInit(): void {}

  listMonth() {
    let listMonth: any = [];
    for (let i = 1; i <= 12; i++) {
      listMonth.push(i);
    }
    return listMonth;
  }

  listYear() {
    let listYear: any = [new Date().getFullYear()];
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < 9; i++) {
      currentYear++;
      listYear.push(currentYear);
    }
    return listYear;
  }

  onSelectRange(event: any) {
    let selected = event.target.value;
    if (selected == 'Tháng') {
      this.month = true;
      this.quarter = false;
      this.year = false;
    } else if (selected == 'Quý') {
      this.month = false;
      this.quarter = true;
      this.year = false;
    } else if (selected == 'Năm') {
      this.month = false;
      this.quarter = false;
      this.year = true;
    }
  }

  onClickMonth(event: any) {
    this.min = new Date();
    this.max = new Date();
    this.min.setFullYear(this.time.getFullYear(), event.target.value - 1, 1);
    this.max.setFullYear(
      this.time.getFullYear(),
      event.target.value - 1,
      this.getDayOfMonth(this.time.getFullYear(), event.target.value)
    );
    console.log(this.min, '=>', this.max);
  }

  onClickQuarter(event: any) {
    this.min = new Date();
    this.max = new Date();
    let quarter = event.target.textContent;
    if (quarter == 'I') {
      this.min.setFullYear(this.time.getFullYear(), 0, 1);
      this.max.setFullYear(
        this.time.getFullYear(),
        2,
        this.getDayOfMonth(this.time.getFullYear(), 3)
      );
      console.log(this.min, '=>', this.max);
    } else if (quarter == 'II') {
      this.min.setFullYear(this.time.getFullYear(), 3, 1);
      this.max.setFullYear(
        this.time.getFullYear(),
        5,
        this.getDayOfMonth(this.time.getFullYear(), 6)
      );
      console.log(this.min, '=>', this.max);
    } else if (quarter == 'III') {
      this.min.setFullYear(this.time.getFullYear(), 6, 1);
      this.max.setFullYear(
        this.time.getFullYear(),
        8,
        this.getDayOfMonth(this.time.getFullYear(), 9)
      );
      console.log(this.min, '=>', this.max);
    } else if (quarter == 'IV') {
      this.min.setFullYear(this.time.getFullYear(), 9, 1);
      this.max.setFullYear(
        this.time.getFullYear(),
        11,
        this.getDayOfMonth(this.time.getFullYear(), 12)
      );
      console.log(this.min, '=>', this.max);
    }
  }

  onClickYear(event: any) {
    this.min = new Date();
    this.max = new Date();
    this.min.setFullYear(event.target.value, 0, 1);
    this.max.setFullYear(event.target.value, 11, 31);
    console.log(this.min, '=>', this.max);
  }

  getDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };
}
