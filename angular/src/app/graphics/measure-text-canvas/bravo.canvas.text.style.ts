const defaultStyle = {
    fontFamily: 'Arial',
    fontSize: 20,
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: 0,
    padding: 0,
    strokeThickness: 0,
    whiteSpace: 'pre',
    leading: 0,
  };
  
  const genericFontFamilies = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy', 'system-ui'];
  
  export interface Foo {
    align: string;
    breakWords: boolean;
    fontWeight: string;
    fontFamily: string;
  }
  
  // Based on TextStyle in Pixi.js's Canvas Engine
  export class TextStyle {
    styleID: number;
    style: any;

    constructor(style: {} = {}) {
      this.styleID = 0;
      this.style = { ...defaultStyle, ...style };
    }
  
    toFontString(): string {
      // build canvas api font setting from individual components. Convert a numeric this.fontSize to px
      const fontSizeString =
        typeof this.style.fontSize === 'number' ? `${this.style.fontSize}px` : this.style.fontSize;
  
      // Clean-up fontFamily property by quoting each font name
      // this will support font names with spaces
      let fontFamilies: Array<string> = !Array.isArray(this.style.fontFamily)
        ? this.style.fontFamily.split(',')
        : this.style.fontFamily;
  
      for (let i = fontFamilies.length - 1; i >= 0; i--) {
        // Trim any extra white-space
        let fontFamily = fontFamilies[i].trim();
        // Check if font is already escaped in quotes except for CSS generic fonts
        if (!/([\"\'])[^\'\"]+\1/.test(fontFamily) && genericFontFamilies.indexOf(fontFamily) < 0) {
          fontFamily = `"${fontFamily}"`;
        }
        fontFamilies[i] = fontFamily;
      }
  
      return `${this.style.fontStyle} ${this.style.fontVariant} ${
        this.style.fontWeight
      } ${fontSizeString} ${fontFamilies.join(',')}`;
    }
  }
  
  // TODO: need to refactor into interface
  // TODO: figure out if any others are needed for MVP
  const unusedStyles = {
    align: 'left',
    breakWords: false,
    dropShadow: false,
    dropShadowAlpha: 1,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 0,
    dropShadowColor: 'black',
    dropShadowDistance: 5,
    fill: 'black',
    fillGradientType: 0,
    fillGradientStops: [],
    lineJoin: 'miter',
    miterLimit: 10,
    stroke: 'black',
    textBaseline: 'alphabetic',
    trim: false,
    wordWrap: false,
    wordWrapWidth: 200,
  };