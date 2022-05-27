import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  ChangeContext,
  Options,
  PointerType,
} from '@angular-slider/ngx-slider';

import { FormBuilder } from '@angular/forms';
import { formatDate } from '@angular/common';

import { CalendarAppComponent } from './calendar-app/calendar-app.component';

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
    this.slider();
    this.onDateEvent();
  }

  minValue!: any;
  maxValue!: any;
  options!: any;
  sliderEvent: string = '';

  slider() {
    this.minValue = 0;
    this.maxValue = 100;
    this.options = {
      floor: 0,
      ceil: 100,
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
  startDate = '2022-04-01';
  endDate = '2022-04-30';

  onDateEvent() {
    this.dateEvent = this.fb.group({
      startDate: [formatDate(new Date(this.startDate), 'yyyy-MM-dd', 'en')],
      endDate: [formatDate(new Date(this.endDate), 'yyyy-MM-dd', 'en')],
    });
  }
}
