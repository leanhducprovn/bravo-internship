import { Component, OnInit } from '@angular/core';

import product from '../../../assets/data/product.json';

import { CollectionView } from '@grapecity/wijmo';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements OnInit {
  data = this.getData();

  constructor() {}

  private getData() {
    let data = product;
    return new CollectionView(data, {
      pageSize: 20,
    });
  }

  ngOnInit(): void {}
}
