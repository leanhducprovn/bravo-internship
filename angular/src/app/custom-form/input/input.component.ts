import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() username!: string;
  @Input() passwork!: string;

  constructor() {}

  typing() {
    if (this.username != '' && this.passwork != '') {
      console.log('test');
    }
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}

  ngOnInit(): void {}
}
