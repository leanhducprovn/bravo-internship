import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-date',
  templateUrl: './get-date.component.html',
  styleUrls: ['./get-date.component.css'],
})
export class GetDateComponent implements OnInit {
  time = new Date();

  constructor() {}

  ngOnInit(): void {
    // test
    for (let i = 0; i < 14; i++) {
      console.log(
        new Date(
          this.time.getFullYear(),
          this.time.getMonth(),
          this.time.getDate() + i
        )
      );
    }
  }
}
