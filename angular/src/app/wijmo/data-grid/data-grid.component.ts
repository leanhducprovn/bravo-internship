import { Component, OnInit, ViewChild } from '@angular/core';

import product from '../../../assets/data/product.json';

import { CollectionView } from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements OnInit {
  data = this.getData();

  @ViewChild('flexGrid', { static: true }) flexGrid!: wjcGrid.FlexGrid;

  constructor() {}

  private getData() {
    let data = product;
    return new CollectionView(data, {
      pageSize: 20,
    });
  }

  ngOnInit(): void {
    this.flexGrid.formatItem.addHandler((flex, e) => {
      console.log(flex, e);
    });
  }
}
