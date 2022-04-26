import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-calendar-app-confirm',
  templateUrl: './input-calendar-app-confirm.component.html',
  styleUrls: ['./input-calendar-app-confirm.component.css'],
})
export class InputCalendarAppConfirmComponent implements OnInit {
  @Input() confirm!: string;
  @Output() clickEvent = new EventEmitter<string>();

  onClose() {
    this.clickEvent.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
