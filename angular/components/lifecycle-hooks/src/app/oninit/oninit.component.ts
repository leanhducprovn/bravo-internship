import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-oninit',
  templateUrl: './oninit.component.html',
  styleUrls: ['./oninit.component.css'],
})
export class OninitComponent implements OnChanges, OnInit {
  title = 'Oninit';
  name = 'Lê Anh Đức';
  address = 'Đông Anh, Hà Nội';
  info = this.name + ' → ' + this.address;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    console.log(this.info);
  }
}
