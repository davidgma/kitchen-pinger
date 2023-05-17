import { Component, Input, SimpleChanges } from '@angular/core';

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

  // For getting the clock size from the parent component
  @Input() clockSize = 0;

  // For getting the clock time from the parent component
  @Input() clockTime = new Date();

  // For getting the background colour (which actually sets the colours of the hands, diallines and pin) from the parent component
  @Input() colourStyles = {
    "background-color": "green"
  }

  constructor() {

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

  }

  ngOnChanges(changes: SimpleChanges) {
    for (let variableName in changes) {
      let change = changes[variableName];
      if (variableName === "clockSize") {
        this.size(change.currentValue);
      }
      if (variableName === "clockTime") {
        this.setHands(change.currentValue);
      }
      if (variableName === "colourStyles") {
        this.smallStyles['background-color'] = change.currentValue["color"];
        this.largeStyles['background-color'] = change.currentValue["color"];
        this.handsStyles['background-color'] = change.currentValue["color"];
      }
    }
  }

  // Used to style the clockface
  public clockSizing = {
    "font-size": "min(90vw / 15, 90vh / 15)",
    "width": "min(91vw, 91vh)",
    "height": "min(91vw, 91vh)",
    "border-width": "min(0.5vh, 0.5vw)",
    "border-style": "solid",
    "border-radius": "50%"
  }

  // For styling the small dial lines
  public smallStyles = {
    "position": "absolute",
    "z-index": 3,
    "left": "49.5%",
    "transform-origin": "50% min(45vw, 45vh)",
    "width": "min(0.5vh, 0.5vw)",
    "height": "min(2vh, 2vw)",
    "background-color": "green"
  }

  // For styling the large dial lines
  public largeStyles = {
    "position": "absolute",
    "z-index": 3,
    "left": "49.5%",
    "transform-origin": "50% min(45vw, 45vh)",
    "width": "min(1vh, 1vw)",
    "height": "min(4vh, 4vw)",
    "background-color": "green"
  }

  // For styling the colour of the hands and central pin
  handsStyles = {
    "background-color": "green"
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

  private size(size: number) {
    this.clockSizing["font-size"] = (size / 15).toFixed() + 'px';
    this.clockSizing["width"] = size.toFixed() + 'px';
    this.clockSizing["height"] = size.toFixed() + 'px';
    this.largeStyles["transform-origin"] = '50% ' + ((size - 5) / 2).toFixed() + 'px';
    this.smallStyles["transform-origin"] = '50% ' + ((size - 5) / 2).toFixed() + 'px';
  }


} // End of ClockfaceComponent

