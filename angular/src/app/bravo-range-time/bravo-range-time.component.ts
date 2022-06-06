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
    console.log(event.target.value);
  }

  onClickYear(event: any) {
    this.min = new Date();
    this.max = new Date();
    this.min.setFullYear(event.target.value, 0, 1);
    this.max.setFullYear(event.target.value, 11, 31);
    console.log(this.min, '=>', this.max);
  }
}
