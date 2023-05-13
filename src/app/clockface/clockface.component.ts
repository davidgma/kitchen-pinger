import { Component } from '@angular/core';
import { IntervalService } from '../interval.service';


@Component({
  selector: 'app-clockface',
  templateUrl: './clockface.component.html',
  styleUrls: ['./clockface.component.scss']
})
export class ClockfaceComponent {

  hours = new Array<number>();
  dialLinesLarge = new Array<number>();
  dialLinesSmall = new Array<number>();
  degreesSeconds = 0;
  degreesMinutes = 0;
  degreesHours = 0;
  // private clockUpdate: CustomEvent;

  constructor(private intervalService: IntervalService) {
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
    // setInterval(() => { this.setHands() }, 100);
  }

  initialize() {
    console.log('Page loaded.');
    // console.log(this);

    // console.log("Calling setHands from initialize...");
    this.placeItems();


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

    // Set up an interval to subscribe to

    // This uses quite a bit of cpu but is smooth :
    // this.intervalService.start("clock-update", 20, false);
    // This uses much less:
    this.intervalService.start("clock-update", 1000, true);


    this.intervalService.addEventListener('clock-update', () => {

      let now = new Date();
      // console.log("milliseconds now: " + this.millisecondsToNextSecond());

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
    let root = <HTMLElement>document.querySelector(':root');

    // console.log('vh: ' + vh);

    // 1. There's not enough space above or below
    if (vh < vw * 1.2 && vw < vh * 1.2) {
      console.log('not enough space above or below');
      // Make the clock face smaller with some margin at the top and put the icons at the bottom.
      // sizes in pixels but based on viewport sizes
      let clockSize = 72 * vh / 100; // pixels
      let transformSize = (clockSize - 5) / 2;
      let fontSize = clockSize / 15;
      let iconSize = clockSize / 10;
      root.style.setProperty('--clock-size', clockSize.toFixed() + 'px');
      root.style.setProperty('--font-size', fontSize.toFixed() + 'px');
      root.style.setProperty('--transform-origin', '50% ' + transformSize.toFixed() + 'px');
      root.style.setProperty('--nav-direction', "row");
      root.style.setProperty('--container-direction', "column");
      root.style.setProperty('--icon-size', iconSize.toFixed() + 'px');
      root.style.setProperty('--line-height', "auto");
      root.style.setProperty('--line-width', "100vw");
      root.style.setProperty('--line-border-horizontal', "1px solid var(--foreground2)");
      root.style.setProperty('--line-border-vertical', "none");
    }
    // 2. There's enough space above and below
    else if (vh >= vw * 1.2) {
      console.log(' enough space above and below');
      // sizes in pixels but based on viewport sizes
      let clockSize = 91 * vw / 100; // pixels
      let transformSize = (clockSize - 4) / 2;
      let fontSize = clockSize / 15;
      let iconSize = clockSize / 10;
      root.style.setProperty('--clock-size', clockSize.toFixed() + 'px');
      root.style.setProperty('--font-size', fontSize.toFixed() + 'px');
      root.style.setProperty('--icon-size', iconSize.toFixed() + 'px');
      root.style.setProperty('--transform-origin', '50% ' + transformSize.toFixed() + 'px');
      root.style.setProperty('--nav-direction', "row");
      root.style.setProperty('--container-direction', "column");
      root.style.setProperty('--line-height', "auto");
      root.style.setProperty('--line-width', "100vw");
      root.style.setProperty('--line-border-horizontal', "1px solid var(--foreground2)");
      root.style.setProperty('--line-border-vertical', "none");
    }
    // 3. There's enough space to the left and right
    if (vw > vh * 1.2) {
      console.log('enough space left and right');
      // sizes in pixels but based on viewport sizes
      let clockSize = 91 * vh / 100; // pixels
      let transformSize = (clockSize - 5) / 2;
      let fontSize = clockSize / 15;
      let iconSize = clockSize / 10;
      root.style.setProperty('--clock-size', clockSize.toFixed() + 'px');
      root.style.setProperty('--font-size', fontSize.toFixed() + 'px');
      root.style.setProperty('--icon-size', iconSize.toFixed() + 'px');
      root.style.setProperty('--transform-origin', '50% ' + transformSize.toFixed() + 'px');
      root.style.setProperty('--nav-direction', "column");
      root.style.setProperty('--container-direction', "row");
      root.style.setProperty('--line-height', "100vh");
      root.style.setProperty('--line-width', "auto");
      root.style.setProperty('--line-border-horizontal', "none");
      root.style.setProperty('--line-border-vertical', "1px solid var(--foreground2)");
    }
  }

  // The number of milliseconds to the next whole second
  private millisecondsToNextSecond(): number {
    let now = new Date();
    let nextSecond = new Date(now.getFullYear(), now.getMonth(),
      now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds() + 1);
    let ret = nextSecond.valueOf() - now.valueOf();
    return ret;
  }


}
