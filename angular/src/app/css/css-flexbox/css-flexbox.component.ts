import { Component, OnInit, ViewChild } from '@angular/core';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-css-flexbox',
  templateUrl: './css-flexbox.component.html',
  styleUrls: ['./css-flexbox.component.css'],
})
export class CssFlexboxComponent implements OnInit {
  currentTime = new Date();
  sidebar = true;
  treeview = true;
  tabGroup = true;
  tabRight = true;

  private _defaultRowHeight!: number;
  @ViewChild('flex', { static: true }) flex!: wjcGrid.FlexGrid;

  ngAfterViewInit() {
    // get some data
    wjcCore.httpRequest(
      'https://services.odata.org/Northwind/Northwind.svc/Customers?$format=json',
      {
        success: (xhr: XMLHttpRequest) => {
          let response = JSON.parse(xhr.responseText);
          this.flex.itemsSource = response.value;
          this._updateGridLayout();
        },
      }
    );
    this._defaultRowHeight = this.flex.rows.defaultSize;
    this.flex.addEventListener(
      window,
      'resize',
      this._updateGridLayout.bind(this)
    );
  }

  initializeGrid(flex: wjcGrid.FlexGrid) {
    flex.formatItem.addHandler(
      (s: wjcGrid.FlexGrid, e: wjcGrid.FormatItemEventArgs) => {
        // show company summary on narrow layout
        if (e.panel == s.cells && e.col == 0) {
          let html = wjcCore.format(
            '<div class="item-header">{CompanyName}</div>' +
              '<div class="item-detail">{ContactName}, {ContactTitle}</div>' +
              '<div class="item-detail">{Address}, {City}, {Country}</div>',
            s.rows[e.row].dataItem
          );
          e.cell.innerHTML = html;
        }
      }
    );
  }

  private _updateGridLayout() {
    // show/hide columns
    let narrow = this.flex.hostElement.clientWidth < 600;
    this.flex.columns.forEach((col: wjcGrid.Column) => {
      col.visible = col.index == 0 ? narrow : !narrow;
    });
    // make rows taller on phone layout
    this.flex.rows.defaultSize = this._defaultRowHeight * (narrow ? 3 : 1);
    // hide column headers on narrow layouts
    this.flex.headersVisibility = narrow
      ? wjcGrid.HeadersVisibility.None
      : wjcGrid.HeadersVisibility.Column;
  }

  constructor() {}

  ngOnInit(): void {}
}
