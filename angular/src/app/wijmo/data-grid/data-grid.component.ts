import { Component, OnInit } from '@angular/core';

import product from '../../../assets/data/product.json';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements OnInit {
  dataTable: {}[] = product;

  constructor() {}

  ngOnInit(): void {}
}
