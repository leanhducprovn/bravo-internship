import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-date-app',
  templateUrl: './input-date-app.component.html',
  styleUrls: ['./input-date-app.component.css'],
})
export class InputDateAppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  zLowerLabelText = 'Từ ngày';
  zUpperLabelText = 'Đến ngày';
}
