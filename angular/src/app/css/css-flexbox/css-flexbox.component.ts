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

  @ViewChild('flex', { static: true }) flex!: wjcGrid.FlexGrid;

  constructor() {
    wjcCore.httpRequest(
      'https://services.odata.org/Northwind/Northwind.svc/Customers?$format=json',
      {
        success: (xhr: XMLHttpRequest) => {
          let response = JSON.parse(xhr.responseText);
          this.flex.itemsSource = response.value;
        },
      }
    );
  }

  ngOnInit(): void {}
}
