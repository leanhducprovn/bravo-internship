import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child-parent',
  templateUrl: './content-child-parent.component.html',
  styleUrls: ['./content-child-parent.component.css'],
})
export class ContentChildParentComponent implements OnInit, DoCheck {
  output!: string;

  constructor() {}

  ngDoCheck() {
    let input = document.getElementById('input') as HTMLInputElement;
    if (input != null) {
      this.output = input.value.toLocaleUpperCase();
    }
  }

  ngOnInit(): void {}
}
