import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-calendar-app-selection',
  templateUrl: './input-calendar-app-selection.component.html',
  styleUrls: ['./input-calendar-app-selection.component.css'],
})
export class InputCalendarAppSelectionComponent implements OnInit {
  @Input() chooseTime!: string;

  constructor() {}

  ngOnInit(): void {}
}
