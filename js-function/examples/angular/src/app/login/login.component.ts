import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login() {
    const setUsername = 'admin';
    const setPassword = 'admin';
    const done = setUsername + setPassword;
    const username = document.getElementById('username') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    if (username != null && password != null) {
      const checking = username.value + password.value;
      if (checking == done) {
        const wrapper = document.querySelector('.codepro-login-wrapper');
        if (wrapper != null) {
          wrapper.classList.add('hidden');
        }
      } else {
        const wrong = document.getElementById('codepro-login-check');
        if (wrong != null) {
          wrong.innerHTML = 'wrong username or password!';
        }
      }
    }
  }

  click(event: MouseEvent) {
    if (event) {
      const btn = document.getElementById('button');
      if (btn != null) {
        btn.addEventListener('mouseout', this.login);
      }
    }
  }

  constructor() {}
  ngOnInit(): void {}
}
