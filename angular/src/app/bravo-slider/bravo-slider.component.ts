import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bravo-slider',
  templateUrl: './bravo-slider.component.html',
  styleUrls: ['./bravo-slider.component.css'],
})
export class BravoSliderComponent implements OnInit {
  @Input() min!: number;
  @Input() start!: number;
  @Input() end!: number;
  @Input() max!: number;
  @Input() step!: number;
  @Input() ticks!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
