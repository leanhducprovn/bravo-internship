import { ChangeContext, PointerType } from '@angular-slider/ngx-slider';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import * as wjc from '@grapecity/wijmo';

@Component({
  selector: 'bravo-slider',
  templateUrl: './bravo-slider.component.html',
  styleUrls: ['./bravo-slider.component.css'],
})
export class BravoSliderComponent extends wjc.Control implements OnInit {
  @Input() min!: number;
  @Input() start!: any;
  @Input() end!: number;
  @Input() max!: number;
  @Input() step!: number;
  @Input() ticks!: boolean;
  @Input() tickStep!: number;
  @Input() ticksValues!: boolean;
  @Input() selectionBar!: boolean;

  // @Input() pointerColor!: string;
  // @Input() pointerSize!: number;
  // @Input() pointerTop!: number;
  // @Input() pointerBorder!: string;
  // @Input() isBubble!: boolean;
  @Input() selectionColor!: string;
  @Input() barColor!: string;
  @Input() barSize!: number;
  @Input() tickType!: string;
  @Input() tickColor!: string;
  @Input() tickBackground!: string;
  @Input() tickTop!: number;

  @Output() startEvent = new EventEmitter<any>();
  @Output() endEvent = new EventEmitter<any>();
  @Output() minEvent = new EventEmitter<any>();
  @Output() maxEvent = new EventEmitter<any>();

  private _isBubble!: boolean;
  private _pointerColor!: string;
  private _pointerSize!: number;
  private _pointerBorder!: string;

  @Input()
  public get isBubble(): boolean {
    return this._isBubble;
  }
  public set isBubble(v: boolean) {
    if (this._isBubble == v) {
      return;
    }
    this._isBubble = v;
    this.invalidate();
  }

  @Input()
  public get pointerColor(): string {
    return this._pointerColor;
  }
  public set pointerColor(v: string) {
    if (this._pointerColor == v) {
      return;
    }
    this._pointerColor = v;
    this.invalidate();
  }

  @Input()
  public get pointerSize(): number {
    return this._pointerSize;
  }
  public set pointerSize(v: number) {
    if (this._pointerSize == v) {
      return;
    }
    this._pointerSize = v;
    this.invalidate();
  }

  @Input()
  public get pointerBorder(): string {
    return this._pointerBorder;
  }
  public set pointerBorder(v: string) {
    if (this._pointerBorder == v) {
      return;
    }
    this._pointerBorder = v;
    this.invalidate();
  }

  constructor(elementRef: ElementRef) {
    super(elementRef.nativeElement);
  }

  override refresh(fullUpdate?: boolean): void {
    this.bubble(this.isBubble);
    this.pointer(this.pointerColor, this.pointerSize, this.pointerBorder);
  }

  ngOnInit(): void {
    // this.bubble(this.isBubble);
    // this.pointer(
    //   this.pointerColor,
    //   this.pointerSize,
    //   this.pointerTop,
    //   this.pointerBorder
    // );
    // console.log(this.slider);

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

  pointer(color: string, size: number, border: string) {
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
      element.style.top = -((size - 32) / 2 + 14 + 4) + 'px';
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

  // event
  onUserChangeStart(changeContext: ChangeContext): void {
    this.minEvent.emit(changeContext.value);
  }

  onUserChange(changeContext: ChangeContext): void {
    this.getChangeContextString(changeContext);
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.maxEvent.emit(changeContext.highValue);
  }

  getChangeContextString(changeContext: ChangeContext): string {
    if (changeContext.pointerType == 0) {
      this.startEvent.emit(changeContext.value);
    } else if (changeContext.pointerType == 1) {
      this.endEvent.emit(changeContext.highValue);
    }
    return (
      `${changeContext.pointerType === PointerType.Min ? 'min' : 'max'}, ` +
      `${changeContext.value}, ` +
      `${changeContext.highValue}`
    );
  }
}
