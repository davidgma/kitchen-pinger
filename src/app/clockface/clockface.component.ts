import { Component } from '@angular/core';
import { IntervalService } from '../interval.service';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-clockface',
  templateUrl: './clockface.component.html',
  styleUrls: ['./clockface.component.scss']
})
export class ClockfaceComponent {

  // Arrays for *ngFor directives
  hours = new Array<number>();
  dialLinesLarge = new Array<number>();
  dialLinesSmall = new Array<number>();

  // For dynamic movement of the hands
  degreesSeconds = 0;
  degreesMinutes = 0;
  degreesHours = 0;

  constructor(private intervalService: IntervalService,
    public cs: StylingService) {

    console.log("In ClockfaceComponent");

    // Fill hours array
    for (let i = 1; i <= 12; i++) {
      this.hours.push(i);
    }

    // Fill large diallines array
    for (let i = 0; i <= 330; i = i + 30) {
      this.dialLinesLarge.push(i);
    }

    // Fill small diallines array
    for (let i = 6; i <= 354; i = i + 6) {
      if (!this.dialLinesLarge.includes(i)) {
        this.dialLinesSmall.push(i);
      }
    }

    onload = () => this.initialize();

  }


  ngAfterViewInit() {

  }

  // Used to style the clockface
  public clockSizing: IClockSizing = {
    "font-size": "min(90vw / 15, 90vh / 15)",
    "width": "min(91vw, 91vh)",
    "height": "min(91vw, 91vh)",
    "border-width": "min(0.5vh, 0.5vw)",
    "border-style": "solid",
    "border-radius": "50%"
  }

  public smallStyles = {
    "position": "absolute",
    "z-index": 3,
    "left": "49.5%",
    "transform-origin": "50% min(45vw, 45vh)",
    "width": "min(0.5vh, 0.5vw)",
    "height": "min(2vh, 2vw)",
    ...this.cs.getContrastMode()
  }

  // Starting point for dial line styles
  public largeStyles = {
    "position": "absolute",
    "z-index": 3,
    "left": "49.5%",
    "transform-origin": "50% min(45vw, 45vh)",
    "width": "min(1vh, 1vw)",
    "height": "min(4vh, 4vw)",
    ...this.cs.getContrastMode()
  }

  initialize() {
    console.log('Page loaded.');

    this.placeItems();
    this.setHands(new Date());


    // let colourMode = document.getElementById('colour-mode');
    // if (colourMode != null && colourMode instanceof HTMLElement) {
    //   colourMode.addEventListener('click', toggleColourMode);
    // }

    // let edit = document.getElementById('edit');
    // if (edit != null && edit instanceof HTMLElement) {
    //   edit.addEventListener('click', editOnStackblitz);
    // }

    // let home = document.getElementById('home');
    // if (home != null && home instanceof HTMLElement) {
    //   home.addEventListener('click', openGithubVersion);
    // }

    // document.addEventListener('visibilitychange', () => {
    //   if (document.visibilityState == 'visible') {
    //     console.log("Calling setHands from visibilitychange event...");
    //     // this.setHands();
    //   }
    // });

    window.addEventListener('resize', () => { this.placeItems(); });

    // Set up an interval to subscribe to.
    // This uses quite a bit of cpu but is smooth:
    // this.intervalService.start("clock-update", 40, false);
    // This uses much less cpu and ticks:
    this.intervalService.start("clock-update", 1000, true);


    this.intervalService.addEventListener('clock-update', () => {

      let now = new Date();

      // Set the title text
      let time = now.getHours().toFixed().padStart(2, '0') + ":" + now.getMinutes().toFixed().padStart(2, '0')
        + ":" + now.getSeconds().toFixed().padStart(2, '0')
        ;
      if (document.title !== time) {
        document.title = time;
      }

      // set the clock hands
      this.setHands(now);
    });

    // How to stop the interval
    // setTimeout(() => {
    //   this.intervalService.stop("clock-update");
    // }, 10000);

  }

  private setHands(now: Date) {

    // console.log("in setHands.");
    if (document.visibilityState === 'visible') {
      // update the hands of the clock
      this.degreesHours = (now.getHours() * 60 + now.getMinutes()) / (12 * 60) * 360;
      this.degreesSeconds = (now.getSeconds() * 1000 + now.getMilliseconds()) / 60000 * 360;
      this.degreesMinutes = now.getMinutes() / 60 * 360;
    }
  }


  // place items based on viewport dimensions
  private placeItems() {
    let vh = window.innerHeight;
    let vw = window.innerWidth;

    // 1. There's not enough space above or below
    if (vh < vw * 1.2 && vw < vh * 1.2) {
      console.log('not enough space above or below');
      // Make the clock face smaller with some margin at the top and put the icons at the bottom.
      // sizes in pixels but based on viewport sizes
      let clockSize = 72 * vh / 100; // pixels
      let transformSize = (clockSize - 5) / 2;
      let fontSize = clockSize / 15;
      this.size(clockSize, fontSize, transformSize);
    }
    // 2. There's enough space above and below
    else if (vh >= vw * 1.2) {
      console.log(' enough space above and below');
      // sizes in pixels but based on viewport sizes
      let clockSize = 91 * vw / 100; // pixels
      let transformSize = (clockSize - 4) / 2;
      let fontSize = clockSize / 15;
      this.size(clockSize, fontSize, transformSize);
    }
    // 3. There's enough space to the left and right
    if (vw > vh * 1.2) {
      console.log('enough space left and right');
      // sizes in pixels but based on viewport sizes
      let clockSize = 91 * vh / 100; // pixels
      let transformSize = (clockSize - 5) / 2;
      let fontSize = clockSize / 15;
      this.size(clockSize, fontSize, transformSize);
    }
  }

  private size(clockSize: number, fontSize: number, transformSize: number) {
    this.clockSizing["font-size"] = fontSize.toFixed() + 'px';
    this.clockSizing["width"] = clockSize.toFixed() + 'px';
    this.clockSizing["height"] = clockSize.toFixed() + 'px';
    this.largeStyles["transform-origin"] = '50% ' + transformSize.toFixed() + 'px';
    this.smallStyles["transform-origin"] = '50% ' + transformSize.toFixed() + 'px';
  }


} // End of ClockfaceComponent

interface IDialLine {
  "position": string;
  "z-index": number;
  "left": string;
  "transform-origin": string;
  "width": string;
  "height": string;
}

interface IClockSizing {
  "font-size": string;
  "width": string;
  "height": string;
  "border-width": string;
  "border-style": string;
  "border-radius": string;
}
