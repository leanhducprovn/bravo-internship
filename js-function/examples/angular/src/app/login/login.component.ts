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

  login(event: MouseEvent) {}

  constructor() {
    const btn = document.getElementById('button');
    if (btn != null) {
      btn.addEventListener('click', this.login);
    }
    console.log();
  }
  ngOnInit(): void {}
}
