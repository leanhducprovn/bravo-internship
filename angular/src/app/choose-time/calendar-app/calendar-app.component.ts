import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'calendar-app',
  templateUrl: './calendar-app.component.html',
  styleUrls: ['./calendar-app.component.css'],
})
export class CalendarAppComponent implements OnInit {
  @Input() zLowerLabelText!: string;
  @Input() zUpperLabelText!: string;

  constructor() {}

  ngOnInit(): void {}
}
