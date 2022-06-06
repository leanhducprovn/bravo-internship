import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bravo-range-slider',
  templateUrl: './bravo-range-slider.component.html',
  styleUrls: ['./bravo-range-slider.component.css'],
})
export class BravoRangeSliderComponent implements OnInit {
  @Input() lowerLabel!: string;
  @Input() upperLabel!: string;
  @Input() type!: string;
  @Input() format!: string;
  @Input() minValue!: Date | number;
  @Input() maxValue!: Date | number;

  today = new Date();

  typeDate = false;
  typeNumber = false;

  constructor() {}

  ngOnInit(): void {
    this.checkType();
  }

  checkType() {
    if (this.type == 'date') {
      this.typeDate = true;
    } else if (this.type == 'number') {
      this.typeNumber = true;
    }
  }

  countDays(min: any, max: any) {
    let ms1 = min.getTime();
    let ms2 = max.getTime();
    return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
  }
}
