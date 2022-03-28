import { Component, OnInit, forwardRef } from '@angular/core';
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

  onChange = (typing: any) => {};

  onTouched = () => {};

  touched = false;

  constructor() {}

  checkUsername() {
    this.markAsTouched();
    this.onChange(this.typing);
  }

  checkPasswork() {
    this.markAsTouched();
    this.onChange(this.typing);
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

  ngOnInit(): void {
    const input = document.getElementById('input');
    if (input != null) {
      input.inputMode = 'text';
      input.innerText = 'admin';
    }
  }
}
