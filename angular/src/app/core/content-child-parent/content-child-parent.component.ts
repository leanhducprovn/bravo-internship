import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child-parent',
  templateUrl: './content-child-parent.component.html',
  styleUrls: ['./content-child-parent.component.css'],
})
export class ContentChildParentComponent implements OnInit, DoCheck {
  input!: string;
  output!: string;

  constructor() {}

  ngDoCheck() {
    let _input = document.getElementById('input') as HTMLInputElement;
    if (_input != null) {
      // case 1
      this.output = _input.value.toLocaleUpperCase();
      // case 2
      this.input = _input.value.toLocaleUpperCase();
    }
  }

  ngOnInit(): void {}
}
