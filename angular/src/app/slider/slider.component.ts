import { Options } from '@angular-slider/ngx-slider';
import {
  AfterViewChecked,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent
  implements OnInit, OnChanges, DoCheck, AfterViewChecked
{
  constructor(private fb: FormBuilder) {}

  ngAfterViewChecked(): void {}

  ngDoCheck(): void {
    this.setEvent();
    this.slider();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.slider();
    this.onEvent();
    console.log('commit 1 ngày sau');
  }

  start!: number;
  end!: number;
  options!: Options;

  slider() {
    this.start = this.setStart ? this.setStart : 0;
    this.end = this.setEnd ? this.setEnd : 100;
    this.options = {
      floor: this.setMin ? this.setMin : 0,
      ceil: this.setMax ? this.setMax : 100,
      step: 10,
      showTicks: true,
    };
  }

  setStart!: number;
  setEnd!: number;
  setMin!: number;
  setMax!: number;

  onReset() {
    this.setStart = 0;
    this.setEnd = 100;
    this.setMin = 0;
  }

  onClick1() {
    this.setStart = 20;
    this.setEnd = 80;
    this.setMin = 10;
  }

  onClick2() {
    this.setStart = 30;
    this.setEnd = 70;
    this.setMin = 0;
  }

  event!: any;

  onEvent() {
    this.event = this.fb.group({
      min: '',
      start: '',
      end: '',
      max: '',
    });
  }

  setEvent() {
    this.setMin = this.event.value.min;
    this.setStart = this.event.value.start;
    this.setEnd = this.event.value.end;
    this.setMax = this.event.value.max;
  }
}
