import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bravo',
  templateUrl: './bravo.component.html',
  styleUrls: ['./bravo.component.css'],
})
export class BravoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  minTime!: Date;
  maxTime!: Date;

  timeEvent(minTime: Date, maxTime: Date) {
    this.minTime = minTime;
    this.maxTime = maxTime;
  }
}
