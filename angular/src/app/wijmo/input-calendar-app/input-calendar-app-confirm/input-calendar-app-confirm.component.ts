import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-calendar-app-confirm',
  templateUrl: './input-calendar-app-confirm.component.html',
  styleUrls: ['./input-calendar-app-confirm.component.css'],
})
export class InputCalendarAppConfirmComponent implements OnInit {
  @Input() confirm!: string;
  @Input() click!: void;
  constructor() {}

  ngOnInit(): void {}
}
