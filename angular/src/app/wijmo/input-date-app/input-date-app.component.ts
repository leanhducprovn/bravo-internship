import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-date-app',
  templateUrl: './input-date-app.component.html',
  styleUrls: ['./input-date-app.component.css'],
})
export class InputDateAppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.bubble(false);
    this.pointer('#2066a7');
    this.selection('#2066a7');
    this.bar(6);
  }

  zLowerLabelText = 'Từ ngày';
  zUpperLabelText = 'Đến ngày';

  bubble(boolean: boolean) {
    const bubble = Array.from(
      document.getElementsByClassName(
        'ngx-slider-bubble'
      ) as HTMLCollectionOf<HTMLElement>
    );
    bubble.forEach((element) => {
      if (boolean) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
  }

  pointer(color: string) {
    const pointer = Array.from(
      document.getElementsByClassName(
        'ngx-slider-pointer'
      ) as HTMLCollectionOf<HTMLElement>
    );
    pointer.forEach((element) => {
      element.style.background = color;
    });
  }

  selection(color: string) {
    const selection = Array.from(
      document.getElementsByClassName(
        'ngx-slider-selection'
      ) as HTMLCollectionOf<HTMLElement>
    );
    selection.forEach((element) => {
      element.style.background = color;
    });
  }

  bar(size: number) {
    const selection = Array.from(
      document.getElementsByClassName(
        'ngx-slider-bar'
      ) as HTMLCollectionOf<HTMLElement>
    );
    selection.forEach((element) => {
      element.style.height = size + 'px';
    });
  }
}
