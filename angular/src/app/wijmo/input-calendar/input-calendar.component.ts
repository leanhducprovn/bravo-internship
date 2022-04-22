import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-calendar',
  templateUrl: './input-calendar.component.html',
  styleUrls: ['./input-calendar.component.css'],
})
export class InputCalendarComponent implements OnInit {
  firstDay!: Date;
  lastDay!: Date;

  constructor() {
    let curr = new Date();
    // console.log(curr);
    // console.log(curr.getDate());
    // console.log(curr.getDay());
    this.firstDay = new Date(curr.setDate(curr.getDate() - curr.getDay()));
    // console.log(this.firstDay);
    this.lastDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
    // console.log(this.lastDay);
  }

  ngOnInit(): void {}
}
