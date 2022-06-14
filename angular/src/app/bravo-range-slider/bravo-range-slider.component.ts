import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { WjInputDate } from '@grapecity/wijmo.angular2.input';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'bravo-range-slider',
  templateUrl: './bravo-range-slider.component.html',
  styleUrls: ['./bravo-range-slider.component.css'],
})
export class BravoRangeSliderComponent implements OnInit {
  @ViewChild('theLowerDate') theLowerDate!: WjInputDate;
  @ViewChild('theUpperDate') theUpperDate!: WjInputDate;

  @Input() lowerLabel!: string;
  @Input() upperLabel!: string;
  @Input() type!: string;
  @Input() format!: string;
  @Input() minValue!: Date | number;
  @Input() maxValue!: Date | number;

  min!: Date | number;
  max!: Date | number;
  options!: Options;

  today = new Date();
  typeDate = false;
  typeNumber = false;

  form = this.fb.group({
    min: ['', { updateOn: 'blur' }],
    max: ['', { updateOn: 'blur' }],
    input: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.options = {
      floor: 1,
      ceil: 100,
      step: 1,
      noSwitching: true,
      showTicks: false,
      showSelectionBar: false,
      showTicksValues: false,
      tickStep: 1,
    };
    this.checkType();
  }

  startEvent(event: any) {
    console.log(event);
    console.log(this.form.value);
  }

  endEvent(event: any) {
    console.log(event);
  }

  minEvent(event: any) {
    console.log(event);
  }

  maxEvent(event: any) {
    console.log(event);
  }

  onChooseTimeMin(dateInput: any) {
    this.min = dateInput.value;
  }

  onChooseTimeMax(dateInput: any) {
    this.max = dateInput.value;
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
