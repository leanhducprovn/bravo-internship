import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { WjInputDate } from '@grapecity/wijmo.angular2.input';
import { WjCalendar } from '@grapecity/wijmo.angular2.input';
import { InputDateTime } from '@grapecity/wijmo.input';

@Component({
  selector: 'calendar-app',
  templateUrl: './calendar-app.component.html',
  styleUrls: ['./calendar-app.component.css'],
})
export class CalendarAppComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('lowerDate') lowerDate!: WjInputDate;
  @ViewChild('upperDate') upperDate!: WjInputDate;

  @Input() zLowerLabelText!: string;
  @Input() zUpperLabelText!: string;
  @Input() min!: number | undefined;
  @Input() max!: number | undefined;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.min, this.max);
  }

  ngAfterViewInit(): void {}

  ngOnInit(): void {}
}
