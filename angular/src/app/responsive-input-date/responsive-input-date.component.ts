import { Component, OnInit } from '@angular/core';

import * as wjc from '@grapecity/wijmo';

@Component({
  selector: 'app-responsive-input-date',
  templateUrl: './responsive-input-date.component.html',
  styleUrls: ['./responsive-input-date.component.css'],
})
export class ResponsiveInputDateComponent implements OnInit {
  min = new Date(2022, 0, 1);
  max = new Date(2022, 11, 31);

  height!: number;
  width!: number;

  constructor() {}

  ngOnInit(): void {}
}
