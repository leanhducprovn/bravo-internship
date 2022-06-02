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
  start = 0;
  end = 250;
  max = 250;

  onReset() {
    this.min = 0;
    this.start = 0;
    this.end = 250;
    this.max = 250;
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
}
