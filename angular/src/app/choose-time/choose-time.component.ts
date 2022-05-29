import {
  AfterViewChecked,
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
export class ChooseTimeComponent
  implements OnInit, AfterViewInit, DoCheck, AfterViewChecked
{
  @ViewChild(CalendarAppComponent) calendarApp!: CalendarAppComponent;

  constructor(private fb: FormBuilder) {}

  ngAfterViewChecked(): void {}

  ngDoCheck(): void {}

  ngAfterViewInit(): void {}

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
    this.maxValue = this.ceil;
    this.options = {
      floor: 0,
      ceil: this.ceil,
      step: 1,
    };
  }

  onUserChangeStart(changeContext: ChangeContext): void {
    this.sliderEvent += `start(${this.getChangeContextString(
      changeContext
    )})\n`;
  }

  onUserChange(changeContext: ChangeContext): void {
    this.sliderEvent += `change(${this.getChangeContextString(
      changeContext
    )})\n`;
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.sliderEvent += `end(${this.getChangeContextString(changeContext)})\n`;
  }

  minSlider!: number;
  maxSlider!: number | undefined;

  getChangeContextString(changeContext: ChangeContext): string {
    this.startDate = moment('2022-04-01');
    this.endDate = moment('2022-06-1');
    if (changeContext.pointerType == 0) {
      this.minSlider = changeContext.value;
      this.maxSlider = changeContext.highValue;
      // console.log('min', this.minSlider, this.maxSlider);
      // set ngày theo slider
      this.startDate = moment(this.startDate).add('days', this.minSlider);
      // set lại ngày form group
      this.dateEvent
        .get('startDate')
        .setValue(moment(this.startDate).format('YYYY-MM-DD'));
    } else if (changeContext.pointerType == 1) {
      this.minSlider = changeContext.value;
      this.maxSlider = changeContext.highValue;
      // console.log('max', this.minSlider, this.maxSlider);
      // set ngày theo slider
      if (this.maxSlider) {
        this.endDate = moment(this.startDate).add('days', this.maxSlider);
      }
      // set lại ngày form group
      this.dateEvent
        .get('endDate')
        .setValue(moment(this.endDate).format('YYYY-MM-DD'));
    }
    return (
      `{type: ${
        changeContext.pointerType === PointerType.Min ? 'min' : 'max'
      }, ` +
      `min: ${changeContext.value}, ` +
      `max: ${changeContext.highValue}}`
    );
  }

  dateEvent!: any;
  startDate = moment('2022-04-01');
  endDate = moment('2022-06-1');

  onDateEvent() {
    this.dateEvent = this.fb.group({
      startDate: [formatDate(this.startDate.format(), 'yyyy-MM-dd', 'en')],
      endDate: [formatDate(this.endDate.format(), 'yyyy-MM-dd', 'en')],
    });
  }
}
