import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-flexbox',
  templateUrl: './css-flexbox.component.html',
  styleUrls: ['./css-flexbox.component.css'],
})
export class CssFlexboxComponent implements OnInit {
  currentTime = new Date();

  constructor() {}

  ngOnInit(): void {}
}
