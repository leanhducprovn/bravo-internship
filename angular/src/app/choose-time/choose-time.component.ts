import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-choose-time',
  templateUrl: './choose-time.component.html',
  styleUrls: ['./choose-time.component.css'],
})
export class ChooseTimeComponent implements OnInit {
  constructor() {}

  value: number = 40;
  highValue: number = 60;
  options: Options = {
    floor: 0,
    ceil: 100,
  };

  ngOnInit(): void {}
}
