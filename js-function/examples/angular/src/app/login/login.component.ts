import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    username: 'admin',
    password: 'admin',
  };

  checking = {
    done: () => {
      return this.user.username + this.user.password;
    },
  };

  done = this.checking.done.bind(this.user);

  login() {
    const username = document.getElementById('username') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    if (username != null && password != null) {
      const checking = username.value + password.value;
      if (checking == '') {
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

  constructor() {}
  ngOnInit(): void {
    const btn = document.getElementById('button');
    if (btn != null) {
      btn.addEventListener('mouseout', this.login.bind(this.done));
    }
    console.log(this.login.bind(this.done));
  }
}
