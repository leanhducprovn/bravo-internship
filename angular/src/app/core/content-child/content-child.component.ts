import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css'],
})
export class ContentChildComponent implements OnInit {
  @Input() label!: string;
  @Input() value!: string;

  constructor() {}

  ngOnInit(): void {}
}
