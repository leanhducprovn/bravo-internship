import { Component, OnInit } from '@angular/core';

import product from '../../../assets/data/product.json';

import * as wjcCore from '@grapecity/wijmo';

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

  constructor() {}

  ngOnInit(): void {}
}
