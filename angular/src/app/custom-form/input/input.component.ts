import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  checkLogin = this.fb.group({
    Username: ['', [Validators.required]],
    Password: ['', [Validators.required]],
  });

  get Username() {
    return this.checkLogin.get('Username')!;
  }
  get Password() {
    return this.checkLogin.get('Password')!;
  }

  login() {
    console.warn(this.checkLogin.value);
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
