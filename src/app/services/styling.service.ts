import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylingService extends EventTarget {

  clockSize: number = 500;
  iconScale = 15;
  iconMinimumSize = 25;
  containerDirection: string;
  navDirection: string;
  lineWidth: string;
  lineHeight: string;
  private currentFormat: number = 0;
  iconSize: number;
  modeName = "dark";

  #mode: ColourMode;
  get mode() { return this.#mode; }

  set mode(newMode: ColourMode) {
    this.#mode = newMode;
    if (newMode === this.darkMode) {
      this.modeName = "dark";
    }
    if (newMode === this.lightMode) {
      this.modeName = "light";
    }
    this.dispatchEvent(new Event("colour-mode"));
  }

  constructor() {
    super();
    // console.log("In StylingService");
    this.#mode = this.darkMode;
    this.containerDirection = "column";
    this.navDirection = "row";
    this.lineWidth = "100vw";
    this.lineHeight = "auto";
    window.addEventListener('resize', () => {
      // console.log("in resize styling service");
      this.placeItems();
    });
    document.addEventListener('visibilitychange', () => {
      // console.log("visibilitychanged: ");
      if (document.visibilityState === "visible") {
        this.placeItems();
      }
    });
    document.addEventListener('DOMContentLoaded', () => {
      this.placeItems();
    });
    this.iconSize = Math.max(this.iconMinimumSize, this.clockSize / this.iconScale);
  }

  public darkMode: ColourMode = {
    "color": "#e8e8e8", // off-white
    "background-color": "#202020" // dark grey
    // "background-color": "rgb(122,122,122);"
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

  // place items based on viewport dimensions
  placeItems() {
    // console.log("In placeItems");

    let vh = window.innerHeight;
    let vw = window.innerWidth;


    // 1. There's not enough space above or below
    if (vh < vw * 1.3 && vw < vh * 1.3) {
      if (this.currentFormat !== 1) {
        console.log('not enough space above or below');
        this.currentFormat = 1;
      }
      // Make the clock face smaller with some margin at the top and put the icons at the bottom.
      // sizes in pixels but based on viewport sizes
      if (this.clockSize !== 72 * vh / 100) {
        this.clockSize = 72 * vh / 100; // pixels
      }
      this.containerDirection = "column";
      this.navDirection = "row";
      this.lineWidth = "100vw";
      this.lineHeight = "auto";
    }
    // 2. There's enough space above and below
    else if (vh >= vw * 1.3) {
      if (this.currentFormat !== 2) {
        this.currentFormat = 2;
        console.log(' enough space above and below');
      }
      // sizes in pixels but based on viewport sizes
      if (this.clockSize !== 91 * vw / 100) {
        this.clockSize = 91 * vw / 100; // pixels
      }
      this.containerDirection = "column";
      this.navDirection = "row";
      this.lineWidth = "100vw";
      this.lineHeight = "auto";
    }
    // 3. There's enough space to the left and right
    if (vw > vh * 1.3) {
      if (this.currentFormat !== 3) {
        this.currentFormat = 3;
        console.log('enough space left and right');
      }
      // sizes in pixels but based on viewport sizes
      if (this.clockSize !== 91 * vh / 100) {
        this.clockSize = 91 * vh / 100; // pixels
      }
      this.containerDirection = "row";
      this.navDirection = "column";
      this.lineWidth = "auto";
      this.lineHeight = "100vh";
    }

    this.iconSize = Math.max(this.iconMinimumSize, this.clockSize / this.iconScale);
  }


}

interface ColourMode {
  "color": string;
  "background-color": string;
}




