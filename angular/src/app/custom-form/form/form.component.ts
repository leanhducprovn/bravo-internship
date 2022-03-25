import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  user = {
    username: 'admin',
    password: 'admin',
  };

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

  done() {
    return this.user.username + this.user.password;
  }

  login() {
    console.warn(this.checkLogin.value);
    const checking =
      this.checkLogin.value.Username + this.checkLogin.value.Password;
    if (checking == this.done()) {
      return window.location.replace('/');
    } else {
      const wrong = document.getElementById('codepro-login-check');
      if (wrong != null) {
        wrong.innerHTML = 'wrong username or password!';
      }
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
