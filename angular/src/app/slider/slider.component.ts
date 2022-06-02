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

  ngDoCheck(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  form = this.fb.group({
    min: '',
    start: '',
    end: '',
    max: '',
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
}
