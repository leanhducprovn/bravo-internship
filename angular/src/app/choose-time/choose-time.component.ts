import { Component, OnInit } from '@angular/core';
import {
  ChangeContext,
  Options,
  PointerType,
} from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-choose-time',
  templateUrl: './choose-time.component.html',
  styleUrls: ['./choose-time.component.css'],
})
export class ChooseTimeComponent implements OnInit {
  constructor() {}

  minValue: number = 0;
  maxValue: number = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    minRange: 0,
    maxRange: 100,
  };

  sliderEvent: string = '';

  onUserChangeStart(changeContext: ChangeContext): void {
    this.sliderEvent += `onUserChangeStart(${this.getChangeContextString(
      changeContext
    )})\n`;
  }

  onUserChange(changeContext: ChangeContext): void {
    this.sliderEvent += `onUserChange(${this.getChangeContextString(
      changeContext
    )})\n`;
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.sliderEvent += `onUserChangeEnd(${this.getChangeContextString(
      changeContext
    )})\n`;
  }

  getChangeContextString(changeContext: ChangeContext): string {
    return (
      `{pointerType: ${
        changeContext.pointerType === PointerType.Min ? 'Min' : 'Max'
      }, ` +
      `value: ${changeContext.value}, ` +
      `highValue: ${changeContext.highValue}}`
    );
  }

  ngOnInit(): void {}
}
