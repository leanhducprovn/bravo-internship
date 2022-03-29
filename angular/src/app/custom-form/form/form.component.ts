import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, AfterViewInit {
  @ViewChild('username') username!: InputComponent;
  @ViewChild('password') password!: InputComponent;

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
    const checking =
      this.checkLogin.value.Username + this.checkLogin.value.Password;
    if (checking == this.done()) {
      this.router.navigate(['/']);
    } else {
      const wrong = document.getElementById('codepro-login-check');
      if (wrong != null) {
        wrong.innerHTML = 'wrong username or password!';
      }
    }
  }

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.warn(this.username);
    console.warn(this.password);
  }
}
