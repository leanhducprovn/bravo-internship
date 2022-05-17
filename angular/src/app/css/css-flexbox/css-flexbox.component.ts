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
  tabVertical = true;

  dataPrimary: {}[] = product;

  dataSecondaryLeft = [
    {
      hanghoa: 'test',
      dvt: 'Cái',
      tkn: '13111',
      tkc: '5111',
      kho: 'KVULA',
      soluong: 1000,
      dongia: '',
      thanhtien: '',
      tuapgia: true,
      null: '',
    },
  ];

  dataSecondaryRight = [
    {
      soluong: 1000,
      vitri: 'VTVULA ',
      tenvitri: 'Vị trí test',
    },
  ];

  @ViewChild('tablePrimary', { static: true }) tablePrimary!: wjcGrid.FlexGrid;

  constructor() {}

  ngOnInit(): void {}
}
