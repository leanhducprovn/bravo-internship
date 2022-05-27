import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  ChangeContext,
  Options,
  PointerType,
} from '@angular-slider/ngx-slider';

import { FormBuilder } from '@angular/forms';

import { CalendarAppComponent } from './calendar-app/calendar-app.component';
@Component({
  selector: 'app-choose-time',
  templateUrl: './choose-time.component.html',
  styleUrls: ['./choose-time.component.css'],
})
export class ChooseTimeComponent implements OnInit, AfterViewInit {
  @ViewChild(CalendarAppComponent) calendarApp!: CalendarAppComponent;

  dateEvent = this.fb.group({
    lowerDate: [''],
    upperDate: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngAfterViewInit(): void {
    // set ngày bắt đầu
    let dataLowerDate = new Date();
    dataLowerDate.setFullYear(2022, 3, 1);
    this.calendarApp.lowerDate.value = dataLowerDate;
    // set ngày kết thúc
  }

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

  ngOnInit(): void {
    console.log(this.dateEvent.value.lowerDate.value);
  }
}
