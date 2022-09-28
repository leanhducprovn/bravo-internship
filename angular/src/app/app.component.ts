import { Component, ElementRef } from '@angular/core';
import * as wjc from '@grapecity/wijmo';

@Component({
  selector: 'leanhduc',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends wjc.Control {
  constructor(elementRef: ElementRef) {
    super(elementRef.nativeElement);
    let body = document.querySelector('body') as any;
    setTimeout(() => {
      wjc.removeChild(body.lastChild);
      wjc.removeChild(body.lastChild);
    });
  }
}
