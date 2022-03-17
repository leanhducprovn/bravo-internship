import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'admin';
  password = 'admin';
  checking = {
    done: () => {
      return this.username + this.password;
    },
  };
  done = this.checking.done;
  login(event: MouseEvent) {
    const evtMsg = event
      ? ' Event target is ' + (event.target as HTMLElement).textContent
      : '';
    alert('Saved.' + evtMsg);
  }
  constructor() {
    console.log(this.done());
  }
  ngOnInit(): void {}
}
