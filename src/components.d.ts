/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  UiAlignText,
  UiButtonType,
  UiColor,
  UiInputType,
  UiOrientation,
  UiRounding,
  UiSize,
} from './utils/ui-types';
import {
  JsonDocsComponent,
} from './components/ui-playground/doc';

export namespace Components {
  interface UiApp {
    /**
    * Background color from the UI Color Palette
    */
    'background': UiColor;
    /**
    * Forground color from the UI Color Palette
    */
    'color': UiColor;
    /**
    * Absolute font size
    */
    'size': UiSize;
  }
  interface UiAppBody {
    /**
    * Background color from the UI Color Palette
    */
    'background': UiColor;
    /**
    * Forground color from the UI Color Palette
    */
    'color': UiColor;
    /**
    * Absolute font size
    */
    'size': UiSize;
  }
  interface UiAppHeader {
    /**
    * Background color from the UI Color Palette
    */
    'background': UiColor;
    /**
    * Forground color from the UI Color Palette
    */
    'color': UiColor;
    /**
    * Absolute font size
    */
    'size': UiSize;
    'src': string;
  }
  interface UiAppNavigation {
    /**
    * Background color from the UI Color Palette
    */
    'background': UiColor;
    /**
    * Forground color from the UI Color Palette
    */
    'color': UiColor;
    /**
    * Absolute font size
    */
    'size': UiSize;
    'toggle': () => Promise<void>;
  }
  interface UiButton {
    /**
    * @description Background color from the UI Color Palette. When only background is present then background will be color and forground will be either white or black. If color attribute is also present then forground color will be set to color attribute.
    */
    'background': UiColor;
    /**
    * @description Set forground color to selected palette color.
    */
    'color': UiColor;
    /**
    * @description This Boolean attribute prevents the user from interacting with the ui-button.
    */
    'disabled': boolean;
    /**
    * @description URL where browser will navigate to once button is clicked. If href is provided then a click event will not be emitted and page will be redirect to the provided url.
    */
    'href': string;
    /**
    * @description Rounding button corners. <ul>    <li> Base : Adds slight corner rounding</li>    <li> fab : Intending to creating single icon round button</li>    <li> none : No rounding</li>    <li> pill : same rounding as fab except has more padding to left and right</li> </ul>
    */
    'round': UiRounding;
    /**
    * @description Absolute-size keywords, based on the user's default font size (which is medium).
    */
    'size': UiSize;
    /**
    * @description Set button type from supported button types.
    */
    'type': UiButtonType;
  }
  interface UiCode {
    'language': 'xml' | 'java' | 'javascript' | 'typescript' | 'sql';
    'setCode': (code: any) => Promise<void>;
  }
  interface UiDocLinks {}
  interface UiHeading {
    /**
    * @description Absolute-size keywords, based on the user's default font size (which is medium).
    */
    'align': UiAlignText;
    /**
    * @description Background color from the UI Color Palette. When only background is present then background will be color and forground will be either white or black. If color attribute is also present then forground color will be set to color attribute.
    */
    'background': UiColor;
    /**
    * @description Set forground color to selected palette color.
    */
    'color': UiColor;
    /**
    * @description Absolute-size keywords, based on the user's default font size (which is medium).
    */
    'size': UiSize;
    /**
    * @description Type provide two additional feature where heading can be underlined (bottom border) or outline which gives border around the heading.
    */
    'type': "underline" | "outline" | "base";
  }
  interface UiIcon {
    /**
    * Background color from the UI Color Palette
    */
    'background': UiColor;
    /**
    * Forground color from the UI Color Palette
    */
    'color': UiColor;
    /**
    * Absolute font size
    */
    'size': UiSize;
  }
  interface UiInput {
    /**
    * @description Background color from the UI Color Palette
    */
    'background': UiColor;
    /**
    * @description Forground color from the UI Color Palette
    */
    'color': UiColor;
    /**
    * @description Type of input being requested
    */
    'orientation': UiOrientation;
    /**
    * @description Absolute font size
    */
    'size': UiSize;
    /**
    * @description Type of input being requested
    */
    'type': UiInputType;
    'value': any;
  }
  interface UiInputColor {}
  interface UiInputOption {
    'getValue': () => Promise<string>;
    'selected': boolean;
    'value': string;
  }
  interface UiInputRadio {
    'orientation': UiOrientation;
  }
  interface UiParagraph {
    /**
    * Background color from the UI Color Palette
    */
    'background': UiColor;
    /**
    * Forground color from the UI Color Palette
    */
    'color': UiColor;
    /**
    * Absolute font size
    */
    'size': UiSize;
  }
  interface UiPlayground {
    'tag': string;
  }
  interface UiPlaygroundAttrs {
    'docs': Array<JsonDocsComponent>;
    'elements': Array<HTMLElement>;
  }
  interface UiRipple {
    'toggle': (e: CustomEvent<any>) => Promise<void>;
  }
  interface UiText {
    /**
    * @description Background color from the UI Color Palette. When only background is present then background will be color and forground will be either white or black. If color attribute is also present then forground color will be set to color attribute.
    */
    'background': UiColor;
    /**
    * @description Set forground color to selected palette color.
    */
    'color': UiColor;
    /**
    * @description Absolute-size keywords, based on the user's default font size (which is medium).
    */
    'size': UiSize;
  }
}

declare global {


  interface HTMLUiAppElement extends Components.UiApp, HTMLStencilElement {}
  var HTMLUiAppElement: {
    prototype: HTMLUiAppElement;
    new (): HTMLUiAppElement;
  };

  interface HTMLUiAppBodyElement extends Components.UiAppBody, HTMLStencilElement {}
  var HTMLUiAppBodyElement: {
    prototype: HTMLUiAppBodyElement;
    new (): HTMLUiAppBodyElement;
  };

  interface HTMLUiAppHeaderElement extends Components.UiAppHeader, HTMLStencilElement {}
  var HTMLUiAppHeaderElement: {
    prototype: HTMLUiAppHeaderElement;
    new (): HTMLUiAppHeaderElement;
  };

  interface HTMLUiAppNavigationElement extends Components.UiAppNavigation, HTMLStencilElement {}
  var HTMLUiAppNavigationElement: {
    prototype: HTMLUiAppNavigationElement;
    new (): HTMLUiAppNavigationElement;
  };

  interface HTMLUiButtonElement extends Components.UiButton, HTMLStencilElement {}
  var HTMLUiButtonElement: {
    prototype: HTMLUiButtonElement;
    new (): HTMLUiButtonElement;
  };

  interface HTMLUiCodeElement extends Components.UiCode, HTMLStencilElement {}
  var HTMLUiCodeElement: {
    prototype: HTMLUiCodeElement;
    new (): HTMLUiCodeElement;
  };

  interface HTMLUiDocLinksElement extends Components.UiDocLinks, HTMLStencilElement {}
  var HTMLUiDocLinksElement: {
    prototype: HTMLUiDocLinksElement;
    new (): HTMLUiDocLinksElement;
  };

  interface HTMLUiHeadingElement extends Components.UiHeading, HTMLStencilElement {}
  var HTMLUiHeadingElement: {
    prototype: HTMLUiHeadingElement;
    new (): HTMLUiHeadingElement;
  };

  interface HTMLUiIconElement extends Components.UiIcon, HTMLStencilElement {}
  var HTMLUiIconElement: {
    prototype: HTMLUiIconElement;
    new (): HTMLUiIconElement;
  };

  interface HTMLUiInputElement extends Components.UiInput, HTMLStencilElement {}
  var HTMLUiInputElement: {
    prototype: HTMLUiInputElement;
    new (): HTMLUiInputElement;
  };

  interface HTMLUiInputColorElement extends Components.UiInputColor, HTMLStencilElement {}
  var HTMLUiInputColorElement: {
    prototype: HTMLUiInputColorElement;
    new (): HTMLUiInputColorElement;
  };

  interface HTMLUiInputOptionElement extends Components.UiInputOption, HTMLStencilElement {}
  var HTMLUiInputOptionElement: {
    prototype: HTMLUiInputOptionElement;
    new (): HTMLUiInputOptionElement;
  };

  interface HTMLUiInputRadioElement extends Components.UiInputRadio, HTMLStencilElement {}
  var HTMLUiInputRadioElement: {
    prototype: HTMLUiInputRadioElement;
    new (): HTMLUiInputRadioElement;
  };

  interface HTMLUiParagraphElement extends Components.UiParagraph, HTMLStencilElement {}
  var HTMLUiParagraphElement: {
    prototype: HTMLUiParagraphElement;
    new (): HTMLUiParagraphElement;
  };

  interface HTMLUiPlaygroundElement extends Components.UiPlayground, HTMLStencilElement {}
  var HTMLUiPlaygroundElement: {
    prototype: HTMLUiPlaygroundElement;
    new (): HTMLUiPlaygroundElement;
  };

  interface HTMLUiPlaygroundAttrsElement extends Components.UiPlaygroundAttrs, HTMLStencilElement {}
  var HTMLUiPlaygroundAttrsElement: {
    prototype: HTMLUiPlaygroundAttrsElement;
    new (): HTMLUiPlaygroundAttrsElement;
  };

  interface HTMLUiRippleElement extends Components.UiRipple, HTMLStencilElement {}
  var HTMLUiRippleElement: {
    prototype: HTMLUiRippleElement;
    new (): HTMLUiRippleElement;
  };

  interface HTMLUiTextElement extends Components.UiText, HTMLStencilElement {}
  var HTMLUiTextElement: {
    prototype: HTMLUiTextElement;
    new (): HTMLUiTextElement;
  };
  interface HTMLElementTagNameMap {
    'ui-app': HTMLUiAppElement;
    'ui-app-body': HTMLUiAppBodyElement;
    'ui-app-header': HTMLUiAppHeaderElement;
    'ui-app-navigation': HTMLUiAppNavigationElement;
    'ui-button': HTMLUiButtonElement;
    'ui-code': HTMLUiCodeElement;
    'ui-doc-links': HTMLUiDocLinksElement;
    'ui-heading': HTMLUiHeadingElement;
    'ui-icon': HTMLUiIconElement;
    'ui-input': HTMLUiInputElement;
    'ui-input-color': HTMLUiInputColorElement;
    'ui-input-option': HTMLUiInputOptionElement;
    'ui-input-radio': HTMLUiInputRadioElement;
    'ui-paragraph': HTMLUiParagraphElement;
    'ui-playground': HTMLUiPlaygroundElement;
    'ui-playground-attrs': HTMLUiPlaygroundAttrsElement;
    'ui-ripple': HTMLUiRippleElement;
    'ui-text': HTMLUiTextElement;
  }
}

declare namespace LocalJSX {
  interface UiApp {
    /**
    * Background color from the UI Color Palette
    */
    'background'?: UiColor;
    /**
    * Forground color from the UI Color Palette
    */
    'color'?: UiColor;
    /**
    * Absolute font size
    */
    'size'?: UiSize;
  }
  interface UiAppBody {
    /**
    * Background color from the UI Color Palette
    */
    'background'?: UiColor;
    /**
    * Forground color from the UI Color Palette
    */
    'color'?: UiColor;
    /**
    * Absolute font size
    */
    'size'?: UiSize;
  }
  interface UiAppHeader {
    /**
    * Background color from the UI Color Palette
    */
    'background'?: UiColor;
    /**
    * Forground color from the UI Color Palette
    */
    'color'?: UiColor;
    /**
    * Absolute font size
    */
    'size'?: UiSize;
    'src'?: string;
  }
  interface UiAppNavigation {
    /**
    * Background color from the UI Color Palette
    */
    'background'?: UiColor;
    /**
    * Forground color from the UI Color Palette
    */
    'color'?: UiColor;
    /**
    * Absolute font size
    */
    'size'?: UiSize;
  }
  interface UiButton {
    /**
    * @description Background color from the UI Color Palette. When only background is present then background will be color and forground will be either white or black. If color attribute is also present then forground color will be set to color attribute.
    */
    'background'?: UiColor;
    /**
    * @description Set forground color to selected palette color.
    */
    'color'?: UiColor;
    /**
    * @description This Boolean attribute prevents the user from interacting with the ui-button.
    */
    'disabled'?: boolean;
    /**
    * @description URL where browser will navigate to once button is clicked. If href is provided then a click event will not be emitted and page will be redirect to the provided url.
    */
    'href'?: string;
    'onUiClick'?: (event: CustomEvent<any>) => void;
    /**
    * @description Rounding button corners. <ul>    <li> Base : Adds slight corner rounding</li>    <li> fab : Intending to creating single icon round button</li>    <li> none : No rounding</li>    <li> pill : same rounding as fab except has more padding to left and right</li> </ul>
    */
    'round'?: UiRounding;
    /**
    * @description Absolute-size keywords, based on the user's default font size (which is medium).
    */
    'size'?: UiSize;
    /**
    * @description Set button type from supported button types.
    */
    'type'?: UiButtonType;
  }
  interface UiCode {
    'language'?: 'xml' | 'java' | 'javascript' | 'typescript' | 'sql';
  }
  interface UiDocLinks {}
  interface UiHeading {
    /**
    * @description Absolute-size keywords, based on the user's default font size (which is medium).
    */
    'align'?: UiAlignText;
    /**
    * @description Background color from the UI Color Palette. When only background is present then background will be color and forground will be either white or black. If color attribute is also present then forground color will be set to color attribute.
    */
    'background'?: UiColor;
    /**
    * @description Set forground color to selected palette color.
    */
    'color'?: UiColor;
    /**
    * @description Absolute-size keywords, based on the user's default font size (which is medium).
    */
    'size'?: UiSize;
    /**
    * @description Type provide two additional feature where heading can be underlined (bottom border) or outline which gives border around the heading.
    */
    'type'?: "underline" | "outline" | "base";
  }
  interface UiIcon {
    /**
    * Background color from the UI Color Palette
    */
    'background'?: UiColor;
    /**
    * Forground color from the UI Color Palette
    */
    'color'?: UiColor;
    /**
    * Absolute font size
    */
    'size'?: UiSize;
  }
  interface UiInput {
    /**
    * @description Background color from the UI Color Palette
    */
    'background'?: UiColor;
    /**
    * @description Forground color from the UI Color Palette
    */
    'color'?: UiColor;
    'onUiInput'?: (event: CustomEvent<any>) => void;
    /**
    * @description Type of input being requested
    */
    'orientation'?: UiOrientation;
    /**
    * @description Absolute font size
    */
    'size'?: UiSize;
    /**
    * @description Type of input being requested
    */
    'type'?: UiInputType;
    'value'?: any;
  }
  interface UiInputColor {
    'onUiInputEvent'?: (event: CustomEvent<any>) => void;
  }
  interface UiInputOption {
    'onUiInputOptionEvent'?: (event: CustomEvent<any>) => void;
    'selected'?: boolean;
    'value'?: string;
  }
  interface UiInputRadio {
    'orientation'?: UiOrientation;
  }
  interface UiParagraph {
    /**
    * Background color from the UI Color Palette
    */
    'background'?: UiColor;
    /**
    * Forground color from the UI Color Palette
    */
    'color'?: UiColor;
    /**
    * Absolute font size
    */
    'size'?: UiSize;
  }
  interface UiPlayground {
    'tag'?: string;
  }
  interface UiPlaygroundAttrs {
    'docs'?: Array<JsonDocsComponent>;
    'elements'?: Array<HTMLElement>;
    'onUpdatePlaygroundCode'?: (event: CustomEvent<any>) => void;
  }
  interface UiRipple {}
  interface UiText {
    /**
    * @description Background color from the UI Color Palette. When only background is present then background will be color and forground will be either white or black. If color attribute is also present then forground color will be set to color attribute.
    */
    'background'?: UiColor;
    /**
    * @description Set forground color to selected palette color.
    */
    'color'?: UiColor;
    /**
    * @description Absolute-size keywords, based on the user's default font size (which is medium).
    */
    'size'?: UiSize;
  }

  interface IntrinsicElements {
    'ui-app': UiApp;
    'ui-app-body': UiAppBody;
    'ui-app-header': UiAppHeader;
    'ui-app-navigation': UiAppNavigation;
    'ui-button': UiButton;
    'ui-code': UiCode;
    'ui-doc-links': UiDocLinks;
    'ui-heading': UiHeading;
    'ui-icon': UiIcon;
    'ui-input': UiInput;
    'ui-input-color': UiInputColor;
    'ui-input-option': UiInputOption;
    'ui-input-radio': UiInputRadio;
    'ui-paragraph': UiParagraph;
    'ui-playground': UiPlayground;
    'ui-playground-attrs': UiPlaygroundAttrs;
    'ui-ripple': UiRipple;
    'ui-text': UiText;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'ui-app': LocalJSX.UiApp & JSXBase.HTMLAttributes<HTMLUiAppElement>;
      'ui-app-body': LocalJSX.UiAppBody & JSXBase.HTMLAttributes<HTMLUiAppBodyElement>;
      'ui-app-header': LocalJSX.UiAppHeader & JSXBase.HTMLAttributes<HTMLUiAppHeaderElement>;
      'ui-app-navigation': LocalJSX.UiAppNavigation & JSXBase.HTMLAttributes<HTMLUiAppNavigationElement>;
      'ui-button': LocalJSX.UiButton & JSXBase.HTMLAttributes<HTMLUiButtonElement>;
      'ui-code': LocalJSX.UiCode & JSXBase.HTMLAttributes<HTMLUiCodeElement>;
      'ui-doc-links': LocalJSX.UiDocLinks & JSXBase.HTMLAttributes<HTMLUiDocLinksElement>;
      'ui-heading': LocalJSX.UiHeading & JSXBase.HTMLAttributes<HTMLUiHeadingElement>;
      'ui-icon': LocalJSX.UiIcon & JSXBase.HTMLAttributes<HTMLUiIconElement>;
      'ui-input': LocalJSX.UiInput & JSXBase.HTMLAttributes<HTMLUiInputElement>;
      'ui-input-color': LocalJSX.UiInputColor & JSXBase.HTMLAttributes<HTMLUiInputColorElement>;
      'ui-input-option': LocalJSX.UiInputOption & JSXBase.HTMLAttributes<HTMLUiInputOptionElement>;
      'ui-input-radio': LocalJSX.UiInputRadio & JSXBase.HTMLAttributes<HTMLUiInputRadioElement>;
      'ui-paragraph': LocalJSX.UiParagraph & JSXBase.HTMLAttributes<HTMLUiParagraphElement>;
      'ui-playground': LocalJSX.UiPlayground & JSXBase.HTMLAttributes<HTMLUiPlaygroundElement>;
      'ui-playground-attrs': LocalJSX.UiPlaygroundAttrs & JSXBase.HTMLAttributes<HTMLUiPlaygroundAttrsElement>;
      'ui-ripple': LocalJSX.UiRipple & JSXBase.HTMLAttributes<HTMLUiRippleElement>;
      'ui-text': LocalJSX.UiText & JSXBase.HTMLAttributes<HTMLUiTextElement>;
    }
  }
}


