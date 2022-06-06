import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bravo-slider',
  templateUrl: './bravo-slider.component.html',
  styleUrls: ['./bravo-slider.component.css'],
})
export class BravoSliderComponent implements OnInit {
  @Input() min!: number;
  @Input() start!: number;
  @Input() end!: number;
  @Input() max!: number;
  @Input() step!: number;
  @Input() ticks!: boolean;
  @Input() tickStep!: number;
  @Input() ticksValues!: boolean;
  @Input() selectionBar!: boolean;
  @Input() pointerColor!: string;
  @Input() pointerSize!: number;
  @Input() pointerTop!: number;
  @Input() pointerBorder!: string;
  @Input() isBubble!: boolean;
  @Input() selectionColor!: string;
  @Input() barColor!: string;
  @Input() barSize!: number;
  @Input() tickType!: string;
  @Input() tickColor!: string;
  @Input() tickBackground!: string;
  @Input() tickTop!: number;

  constructor() {}

  ngOnInit(): void {
    this.bubble(this.isBubble);
    this.pointer(
      this.pointerColor,
      this.pointerSize,
      this.pointerTop,
      this.pointerBorder
    );
    this.bar(this.barColor, this.barSize);
    this.selection(this.selectionColor);
    setTimeout(() => {
      this.tick(
        this.tickType,
        this.tickColor,
        this.tickBackground,
        this.tickTop
      );
    });
  }

  bubble(boolean: boolean) {
    const bubble = Array.from(
      document.getElementsByClassName(
        'ngx-slider-bubble'
      ) as HTMLCollectionOf<HTMLElement>
    );
    bubble.forEach((element) => {
      if (boolean) {
        element.style.display = 'block';
      } else if (!boolean) {
        element.style.display = 'none';
      }
    });
  }

  pointer(color: string, size: number, top: number, border: string) {
    const pointer = Array.from(
      document.getElementsByClassName(
        'ngx-slider-pointer'
      ) as HTMLCollectionOf<HTMLElement>
    );
    pointer.forEach((element) => {
      element.style.background = color;
      element.style.maxWidth = size + 'px';
      element.style.maxHeight = size + 'px';
      element.style.border = border;
      element.style.borderRadius = '100%';
      element.style.top = top + 'px';
    });
  }

  selection(color: string) {
    const selection = Array.from(
      document.getElementsByClassName(
        'ngx-slider-selection'
      ) as HTMLCollectionOf<HTMLElement>
    );
    selection.forEach((element) => {
      element.style.background = color;
    });
  }

  bar(color: string, size: number) {
    const selection = Array.from(
      document.getElementsByClassName(
        'ngx-slider-bar'
      ) as HTMLCollectionOf<HTMLElement>
    );
    selection.forEach((element) => {
      element.style.background = color;
      element.style.height = size + 'px';
    });
  }

  tick(type: string, color: string, background: string, top: number) {
    const tick = Array.from(
      document.getElementsByClassName(
        'ngx-slider-tick'
      ) as HTMLCollectionOf<HTMLElement>
    );
    tick.forEach((element) => {
      if (type == 'vertical') {
        element.style.width = '1px';
        element.style.height = '5px';
        element.style.background = background;
        element.style.color = color;
        element.style.borderRadius = 'unset';
        element.style.top = top + 'px';
      } else if (type == 'circle') {
        element.style.width = '15px';
        element.style.height = '15px';
        element.style.top = '-3px';
        element.style.borderRadius = '100%';
        element.style.background = background;
        element.style.color = color;
        element.style.top = top + 'px';
      }
    });
  }
}
