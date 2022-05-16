import { Component, OnInit } from '@angular/core';

import { ODataCollectionView } from '@grapecity/wijmo.odata';
import * as wjcGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements OnInit {
  customers: ODataCollectionView;
  itemCount!: string;

  constructor() {
    let url = 'https://services.odata.org/Northwind/Northwind.svc';
    this.customers = new ODataCollectionView(url, 'Customers', {
      sortOnServer: true,
      filterOnServer: true,
    });
  }

  flexInitialized(flexgrid: wjcGrid.FlexGrid) {
    flexgrid.loadedRows.addHandler(() => {
      this.itemCount = flexgrid.rows.length + ' items';
    });
  }

  ngOnInit(): void {}
}
