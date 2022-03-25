import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
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
