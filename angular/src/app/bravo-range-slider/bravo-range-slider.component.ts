import { Options } from '@angular-slider/ngx-slider';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { WjInputDate } from '@grapecity/wijmo.angular2.input';

import { FormBuilder } from '@angular/forms';

import * as wjc from '@grapecity/wijmo';

import { BravoGraphicsRenderer } from '../graphics/bravo.graphics.renderer';
import { Font } from '../graphics/font';

@Component({
  selector: 'bravo-range-slider',
  templateUrl: './bravo-range-slider.component.html',
  styleUrls: ['./bravo-range-slider.component.css'],
})
export class BravoRangeSliderComponent extends wjc.Control implements OnInit {
  @ViewChild('theLowerDate') theLowerDate!: WjInputDate;
  @ViewChild('theUpperDate') theUpperDate!: WjInputDate;

  @Input() upperLabel!: string;

  private _lowerLabel!: string;
  @Input()
  public get lowerLabel(): string {
    return this._lowerLabel;
  }
  public set lowerLabel(v: string) {
    if (this._lowerLabel == v) {
      return;
    }
    this._lowerLabel = v;
    this.invalidate();
  }

  @Input() type!: string;
  @Input() format!: string;
  @Input() maxValue!: Date | number;

  private _minValue!: Date | number;
  @Input()
  public get minValue(): Date | number {
    return this._minValue;
  }
  public set minValue(v: Date | number) {
    if (this._minValue == v) {
      return;
    }
    this._minValue = v;
    this.invalidate();
  }

  min!: Date | number;
  max!: Date | number;
  options!: Options;

  today = new Date();
  typeDate = false;
  typeNumber = false;

  form = this.fb.group({
    input: [''],
  });

  constructor(elementRef: ElementRef, private fb: FormBuilder) {
    super(elementRef.nativeElement);
  }

  override refresh(fullUpdate?: boolean): void {
    this.responsive();
  }

  ngOnInit(): void {
    this.options = {
      floor: 1,
      ceil: 200,
      step: 1,
      noSwitching: true,
      showTicks: false,
      showSelectionBar: false,
      showTicksValues: false,
      tickStep: 1,
    };
    this.checkType();
    console.log(this.getPreferredSize());
  }

  startEvent(event: any) {
    console.log(event);
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

  responsive() {
    const theLowerDate = Array.from(
      this.theLowerDate.hostElement.getElementsByClassName(
        'wj-form-control'
      ) as HTMLCollectionOf<HTMLElement>
    );
    theLowerDate.forEach((element) => {
      wjc.setCss(element, {
        width:
          Number(
            BravoGraphicsRenderer.measureString(
              wjc.Globalize.format(this.minValue, this.format),
              new Font('Segoe UI', 9.75)
            )?.width
          ) +
          16 +
          'px',
      });
    });
    const theUpperDate = Array.from(
      this.theUpperDate.hostElement.getElementsByClassName(
        'wj-form-control'
      ) as HTMLCollectionOf<HTMLElement>
    );
    theUpperDate.forEach((element) => {
      wjc.setCss(element, {
        width:
          Number(
            BravoGraphicsRenderer.measureString(
              wjc.Globalize.format(this.minValue, this.format),
              new Font('Segoe UI', 9.75)
            )?.width
          ) +
          16 +
          'px',
      });
    });
  }

  getPreferredSize() {
    let size = new wjc.Size(
      (Number(
        BravoGraphicsRenderer.measureString(
          wjc.Globalize.format(this.minValue, this.format),
          new Font('Segoe UI', 9.75)
        )?.width
      ) +
        16 +
        32) *
        2 +
        20,
      Number(
        BravoGraphicsRenderer.measureString(
          this.lowerLabel,
          new Font('Segoe UI', 9.75)
        )?.height
      ) +
        10 +
        Number(
          BravoGraphicsRenderer.measureString(
            wjc.Globalize.format(this.minValue, this.format),
            new Font('Segoe UI', 9.75)
          )?.height
        ) +
        54
    );
    return size;
  }
}
