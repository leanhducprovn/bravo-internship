import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

import product from '../../../assets/data/product.json';

import { CollectionView } from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcCore from '@grapecity/wijmo';
import * as wjInput from '@grapecity/wijmo.input';
import { EditHighlighter } from './edit-highlighter';
@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  @ViewChild('flexGrid', { static: true }) flexGrid!: wjcGrid.FlexGrid;
  @ViewChild('unitsCombo', { static: true }) unitsCombo!: wjInput.ComboBox;

  units!: string[];
  detailView!: wjcCore.CollectionView;

  constructor() {}

  ngAfterViewInit(): void {}

  ngAfterViewChecked() {}

  onUnitsSelectedIndexChanged() {
    this.detailView.refresh();
  }

  private getData() {}

  gridInitialized(flexGrid: wjcGrid.FlexGrid) {
    flexGrid.formatItem.addHandler((flex, e) => {
      if (e.panel.cellType == wjcGrid.CellType.RowHeader) {
        e.cell.textContent = (e.row + 1).toString();
      }
    });
    // edit highlighter
    new EditHighlighter(flexGrid, 'cell-changed');
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
    this.flexGrid.autoRowHeights = true;
    // selecting
    this.units =
      'Cái,Chiếc,Chuyến,Bảng,Bộ,Lọ,PCS,Chai,Quả,Vỉ,Gram,Lon,Lốc,Gói,Túi,Hộp,Con,Hũ,Thùng,Tuýp,Cây,Thỏi,Miếng'.split(
        ','
      );
    this.detailView = new CollectionView(product, {
      pageSize: 10,
      filter: (item: { Unit: string | null }) => {
        return item.Unit == this.unitsCombo.text;
      },
    });
  }
}
