import { Component, OnInit } from '@angular/core';

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

  dataPrimary!: any;

  constructor() {
    wjcCore.httpRequest(
      'https://services.odata.org/Northwind/Northwind.svc/Customers?$format=json',
      {
        success: (xhr: XMLHttpRequest) => {
          let response = JSON.parse(xhr.responseText);
          this.dataPrimary = response.value;
        },
      }
    );
  }

  ngOnInit(): void {}
}
