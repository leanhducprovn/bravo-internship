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
import { Globalize } from '@grapecity/wijmo';

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

  @ViewChild('test', { static: true }) test!: wjcGrid.FlexGrid;

  units!: string[];
  detailView!: wjcCore.CollectionView;

  rxSearch!: any;
  rxHighlight!: any;

  constructor() {}

  ngAfterViewInit(): void {}

  ngAfterViewChecked() {}

  onUnitsSelectedIndexChanged() {
    this.detailView.refresh();
  }

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

  // filter by name
  filter(e: any) {
    let filter = (<HTMLInputElement>e.target).value.toLowerCase();
    this.flexGrid.collectionView.filter = (item: any) => {
      return filter.length == 0 || item.Name.toLowerCase().indexOf(filter) > -1;
    };
  }

  ngOnInit(): void {
    this.flexGrid.autoRowHeights = true;
    // selecting
    this.units =
      'Cái,Chiếc,Chuyến,Bảng,Bộ,Lọ,PCS,Chai,Quả,Vỉ,Gram,Lon,Lốc,Gói,Túi,Hộp,Con,Hũ,Thùng,Tuýp,Cây,Thỏi,Miếng'.split(
        ','
      );
    this.detailView = new CollectionView(product, {
      sortDescriptions: ['Unit', 'ItemGroupCode'],
      groupDescriptions: ['Unit', 'ItemGroupCode'],
      pageSize: 10,
      filter: (item: { Unit: string | null }) => {
        return item.Unit == this.unitsCombo.text;
      },
    });

    // search highlight
    this.flexGrid.formatItem.addHandler((s, e) => {
      if (this.rxHighlight) {
        if (e.panel == s.cells && e.cell.children.length == 0) {
          e.cell.innerHTML = e.cell.innerHTML.replace(
            this.rxHighlight,
            '<span class="search-highlight">$1</span>'
          );
        }
      }
    });

    let search = document.getElementById(
      'search-highlight'
    ) as HTMLElement | null;
    if (search) {
      search.addEventListener('input', (e) => {
        if (e.target) {
          const target = e.target as HTMLTextAreaElement;
          this.applySearch(this.flexGrid, target.value);
        }
      });
    }
  }

  applySearch(grid: wjcGrid.FlexGrid, text: any) {
    this.rxSearch = this.rxHighlight = null;
    text = text.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    let terms = text.split(' ').filter((x: any) => x);
    if (terms.length) {
      this.rxSearch = new RegExp('(?=.*' + terms.join(')(?=.*') + ')', 'gi');
      this.rxHighlight = new RegExp('(' + terms.join('|') + ')', 'gi');
    }
    // update filter
    grid.collectionView.filter = (item: any) => {
      if (this.rxSearch) {
        let itemText = this.getItemText(this.flexGrid, item);
        return itemText.match(this.rxSearch) != null;
      }
      return true;
    };
  }

  getItemText(grid: { columns: any[] }, item: any) {
    let vals: any[] = [];
    grid.columns.forEach((col) => {
      let binding = col._binding;
      if (binding) {
        let val = binding.getValue(item);
        if (col.dataMap) {
          val = col.dataMap.getDisplayValue(val);
        } else {
          val = Globalize.format(val, col.format);
        }
        vals.push(val);
      }
    });
    return vals.join(' ');
  }
}
