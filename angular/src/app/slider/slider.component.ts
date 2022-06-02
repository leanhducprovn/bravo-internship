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

  ngDoCheck(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.slider(
      0,
      0,
      this.countDay(this.lowerDate, this.upperDate),
      this.countDay(this.lowerDate, this.upperDate)
    );
  }

  form = this.fb.group({
    min: ['', { updateOn: 'blur' }],
    start: ['', { updateOn: 'blur' }],
    end: ['', { updateOn: 'blur' }],
    max: ['', { updateOn: 'blur' }],
  });

  min = 0;
  start = 0;
  end = 0;
  max = 0;

  slider(min: number, start: number, end: number, max: number) {
    this.min = min;
    this.start = start;
    this.end = end;
    this.max = max;
  }

  onReset() {
    this.min = 0;
    this.start = 0;
    this.end = this.countDay(this.lowerDate, this.upperDate);
    this.max = this.countDay(this.lowerDate, this.upperDate);
  }

  onRandom() {
    this.min = this.getRandom(1, 100);
    this.start = this.getRandom(100, 500);
    this.end = this.getRandom(500, 900);
    this.max = this.getRandom(900, 1000);
  }

  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  zLowerLabelText = 'Từ ngày';
  zUpperLabelText = 'Đến ngày';

  lowerDate = new Date('2022-1-1');
  upperDate = new Date('2022-6-1');

  countDay(date1: any, date2: any) {
    let ms1 = date1.getTime();
    let ms2 = date2.getTime();
    return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
  }
}
