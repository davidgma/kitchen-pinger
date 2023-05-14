import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylingService {

  mode: ColourMode;

  public darkMode: ColourMode = {
    "color": "#e8e8e8",
    "background-color": "#202020"
  };

  public lightMode: ColourMode = {
    "color": "#202020",
    "background-color": "#e8e8e8"
  };

  public greenMode: ColourMode = {
    "color": "green",
    "background-color": "gray"
  };

  public greenModeOffset: ColourMode = {
    "color": "gray",
    "background-color": "green"
  };


  // Used to style the clockface
  public clockSizing: Object = {
    "font-size": "min(90vw / 15, 90vh / 15)",
    "width": "min(91vw, 91vh)",
    "height": "min(91vw, 91vh)",
    "border-width": "min(0.5vh, 0.5vw)",
    "border-style": "solid",
    "border-radius": "50%"
  }

  public dialLineCommon: IDialLineCommon = {
    "position": "absolute",
    "z-index": 3,
    "left": "49.5%",
    "transform-origin": "50% min(45vw, 45vh)"
  }

  public dialLineLarge: Object = {
    "width": "min(1vh, 1vw)",
    "height": "min(4vh, 4vw)",
  }

  public dialLineSmall: Object = {
    "width": "min(0.5vh, 0.5vw)",
    "height": "min(2vh, 2vw)",
  }

  // public iconSizing: Sizing = {
  //   "font-size": "min(90vw / 8, 90vh / 8)"
  // }



  constructor() {
    this.mode = this.darkMode;
  }

  toggleColourMode(event: MouseEvent) {
    console.log('Toggling colour mode...');
    console.log(event.target);
    let targetElement = event.target;
    if (targetElement != null && targetElement instanceof HTMLElement) {
      console.log(targetElement.innerText);
      if (targetElement.innerText === 'light_mode') {
        targetElement.innerText = 'nightlight';
      } else {
        targetElement.innerText = 'light_mode';
      }
    }
    let root = document.documentElement;
    let background = getComputedStyle(root).getPropertyValue('--background');
    if (background === '#E8E8E8') {
      root.style.setProperty('--background', '#202020');
      root.style.setProperty('--foreground', '#E8E8E8');
      root.style.setProperty('--foreground2', '#E8E8E8a0');
    }
    else {
      root.style.setProperty('--background', '#E8E8E8');
      root.style.setProperty('--foreground', '#202020');
      root.style.setProperty('--foreground2', '#202020ed');
    }
  }

  public getMode(): ColourMode {
    return this.mode;
  }

  public getContrastMode() {
    switch (this.mode) {
      case this.darkMode:
        return this.lightMode;
      case this.lightMode:
        return this.darkMode;
      case this.greenMode:
        return this.greenModeOffset;
      default:
        return this.darkMode;
    }
  }
}

interface ColourMode {
  "color": string;
  "background-color": string;
}

// interface Sizing {
//   "font-size": string;
//   "width": string;
//   "height": string;
// }


interface IDialLineCommon {
  "position": string;
  "z-index": number;
  "left": string;
  "transform-origin": string;
}

