import { Component, OnInit, ViewChild } from '@angular/core';

import product from '../../../assets/data/product.json';

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

  dataPrimary: {}[] = product;

  @ViewChild('tablePrimary', { static: true }) tablePrimary!: wjcGrid.FlexGrid;

  constructor() {}

  ngOnInit(): void {
    this.tablePrimary.formatItem.addHandler((flex, e) => {
      console.log(flex, e);
    });
  }
}
