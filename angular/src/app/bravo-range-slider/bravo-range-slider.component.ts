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
}
