import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylingService extends EventEmitter {

  constructor() {
    super();
  }

  public darkMode: ColourMode = {
    "color": "#e8e8e8", // off-white
    "background-color": "#202020" // dark grey
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





  // public iconSizing: Sizing = {
  //   "font-size": "min(90vw / 8, 90vh / 8)"
  // }





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

  private _mode: ColourMode = this.darkMode;
  public get mode(): ColourMode {
    return this._mode;
  }
  public set mode(newMode: ColourMode) {
    this._mode = newMode;
  }

  public getContrastMode() {
    // console.log("in getContrastMode. this.mode: " + this.mode);
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




