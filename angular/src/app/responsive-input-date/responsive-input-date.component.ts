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

  sizeEvent(width: number, height: number) {
    this.width = width;
    this.height = height;
    console.log(this.width, this.height);
    const left = Array.from(
      document.getElementsByClassName('left') as HTMLCollectionOf<HTMLElement>
    );
    left.forEach((element) => {
      wjc.setCss(element, {
        width: `calc(100% - ${this.width}` + `pt`,
      });
    });
  }
}
