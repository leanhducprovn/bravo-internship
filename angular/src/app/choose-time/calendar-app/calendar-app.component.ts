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
  @Input() startDate: any;
  @Input() endDate: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.startDate, this.endDate);
  }

  ngAfterViewInit(): void {}

  ngOnInit(): void {}
}
