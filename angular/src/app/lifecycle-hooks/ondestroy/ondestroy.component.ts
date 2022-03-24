import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ondestroy',
  templateUrl: './ondestroy.component.html',
  styleUrls: ['./ondestroy.component.css'],
})
export class OndestroyComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.warn('Destroy test');
  }

  ngOnDestroy(): void {
    console.error(this.ngOnInit());
  }
}
