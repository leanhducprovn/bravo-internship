import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChangeContext, PointerType } from '@angular-slider/ngx-slider';

import { FormBuilder } from '@angular/forms';
import { formatDate } from '@angular/common';

import { CalendarAppComponent } from './calendar-app/calendar-app.component';
import * as moment from 'moment';

@Component({
  selector: 'app-choose-time',
  templateUrl: './choose-time.component.html',
  styleUrls: ['./choose-time.component.css'],
})
export class ChooseTimeComponent implements OnInit, AfterViewInit, DoCheck {
  @ViewChild(CalendarAppComponent) calendarApp!: CalendarAppComponent;

  constructor(private fb: FormBuilder) {}

  ngDoCheck(): void {}

  ngAfterViewInit(): void {
    // set ngày bắt đầu
    this.calendarApp.lowerDate.value = this.dateEvent.value.startDate;
    // set ngày kết thúc
    this.calendarApp.upperDate.value = this.dateEvent.value.endDate;
  }

  ngOnInit(): void {
    this.ceil = this.endDate.diff(this.startDate, 'days');
    this.slider();
    this.onDateEvent();
  }

  minValue!: number;
  maxValue!: number;
  options!: any;
  sliderEvent: string = '';
  ceil!: number;

  slider() {
    this.minValue = 0;
    this.maxValue = 100;
    this.options = {
      floor: 0,
      ceil: this.ceil,
      step: 1,
      minRange: 0,
      maxRange: 100,
    };
  }

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

  dateEvent!: any;
  startDate = moment('2022-04-01');
  endDate = moment('2022-04-30');

  onDateEvent() {
    this.dateEvent = this.fb.group({
      startDate: [formatDate(this.startDate.format(), 'yyyy-MM-dd', 'en')],
      endDate: [formatDate(this.endDate.format(), 'yyyy-MM-dd', 'en')],
    });
  }
}
