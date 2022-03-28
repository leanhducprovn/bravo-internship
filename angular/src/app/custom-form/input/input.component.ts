import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  typing: any;

  onChange = (value: any) => {};

  onTouched = () => {};

  touched = false;

  constructor() {}

  checking(event: any) {
    this.markAsTouched();
    this.onChange((this.typing = event.target.value));
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  writeValue(typing: any) {
    this.typing = typing;
  }
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  placeholder = 'username';
  type = 'text';

  ngOnInit(): void {
    const input = document.querySelector('input') as HTMLInputElement;
    if (input != null) {
      input.setAttribute('placeholder', this.placeholder);
    }
  }
}
