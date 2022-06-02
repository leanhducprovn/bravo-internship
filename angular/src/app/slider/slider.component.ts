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

  ngOnInit(): void {}

  form = this.fb.group({
    min: ['', { updateOn: 'blur' }],
    start: ['', { updateOn: 'blur' }],
    end: ['', { updateOn: 'blur' }],
    max: ['', { updateOn: 'blur' }],
  });

  min = 0;
  start = 50;
  end = 200;
  max = 250;

  onReset() {
    this.min = 0;
    this.start = 50;
    this.end = 200;
    this.max = 250;
  }

  onRandom() {
    this.min = this.getRandom(1, 100);
    this.start = this.getRandom(100, 200);
    this.end = this.getRandom(200, 900);
    this.max = this.getRandom(900, 1000);
  }

  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
