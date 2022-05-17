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

  gridInitialized(flexGrid: wjcGrid.FlexGrid) {
    flexGrid.formatItem.addHandler((flex, e) => {
      if (e.panel.cellType == wjcGrid.CellType.RowHeader) {
        e.cell.textContent = (e.row + 1).toString();
      }
    });
  }

  onloadedRows(flexGrid: wjcGrid.FlexGrid) {
    for (var i = 0; i < flexGrid.rows.length; i++) {
      var row = flexGrid.rows[i];
      var item = row.dataItem;
      if (item.Unit == 'Bảng') {
        row.cssClass = 'unit-bang';
      } else if (item.Unit == 'Chiếc') {
        row.cssClass = 'unit-chiec';
      } else if (item.Unit == 'Chuyến') {
        row.cssClass = 'unit-chuyen';
      } else if (item.Unit == 'Cái') {
        row.cssClass = 'unit-cai';
      } else if (item.Unit == 'PCS') {
        row.cssClass = 'unit-pcs';
      } else if (item.Unit == 'Bộ') {
        row.cssClass = 'unit-bo';
      } else if (item.Unit == 'Lọ') {
        row.cssClass = 'unit-lo';
      } else if (item.Unit == 'Chai') {
        row.cssClass = 'unit-chai';
      }
    }
  }

  ngOnInit(): void {
    this.flexGrid.formatItem.addHandler((flex, e) => {
      console.log(flex, e);
    });
  }
}
