import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylingService extends EventTarget {

  public clockSize = 500;
  public transformSize = 250;
  public fontSize = 30;
  public iconSize = 50;
  public mode: ColourMode;
  public containerDirection: string;
  public navDirection: string;
  public lineWidth: string;
  public lineHeight: string;

  constructor() {
    super();
    console.log("In StylingService");
    this.mode = this.darkMode;
    this.containerDirection = "column";
    this.navDirection = "row";
    this.lineWidth = "100vw";
    this.lineHeight = "auto";
    window.addEventListener('resize', () => { this.placeItems(); });
    window.addEventListener('load', () => { this.placeItems(); });
    onload = () => this.placeItems();
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

  // place items based on viewport dimensions
  private placeItems() {
    console.log("In placeItems");
    let iconScale = 10;
    let vh = window.innerHeight;
    let vw = window.innerWidth;

    // 1. There's not enough space above or below
    if (vh < vw * 1.3 && vw < vh * 1.3) {
      console.log('not enough space above or below');
      // Make the clock face smaller with some margin at the top and put the icons at the bottom.
      // sizes in pixels but based on viewport sizes
      this.clockSize = 72 * vh / 100; // pixels
      this.transformSize = (this.clockSize - 5) / 2;
      this.fontSize = this.clockSize / 15;
      this.iconSize = this.clockSize / iconScale;
      this.containerDirection = "column";
      this.navDirection = "row";
      this.lineWidth = "100vw";
      this.lineHeight = "auto";
      this.dispatchEvent(new Event('resize'));
    }
    // 2. There's enough space above and below
    else if (vh >= vw * 1.3) {
      console.log(' enough space above and below');
      // sizes in pixels but based on viewport sizes
      this.clockSize = 91 * vw / 100; // pixels
      this.transformSize = (this.clockSize - 4) / 2;
      this.fontSize = this.clockSize / 15;
      this.iconSize = this.clockSize / iconScale;
      this.containerDirection = "column";
      this.navDirection = "row";
      this.lineWidth = "100vw";
      this.lineHeight = "auto";
      this.dispatchEvent(new Event('resize'));
    }
    // 3. There's enough space to the left and right
    if (vw > vh * 1.3) {
      console.log('enough space left and right');
      // sizes in pixels but based on viewport sizes
      this.clockSize = 91 * vh / 100; // pixels
      this.transformSize = (this.clockSize - 5) / 2;
      this.fontSize = this.clockSize / 15;
      this.iconSize = this.clockSize / iconScale;
      this.containerDirection = "row";
      this.navDirection = "column";
      this.lineWidth = "auto";
      this.lineHeight = "100vh";
      this.dispatchEvent(new Event('resize'));
    }
  }


}

interface ColourMode {
  "color": string;
  "background-color": string;
}




