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
  @Input() UTC = false;

  // For getting the background colour (which actually sets the colours of the hands, diallines and pin) from the parent component
  @Input() colour = "green";


  constructor() {

    // console.log("In ClockfaceComponent");

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
      if (variableName === "clockTime") {
        this.setHands(change.currentValue);
      }
    }
  }

  private setHands(now: Date) {

    // console.log("in setHands.");
    if (document.visibilityState === 'visible') {
      // update the hands of the clock
      if (this.UTC) {
        this.degreesHours = (now.getUTCHours() * 60 + now.getUTCMinutes()) / (12 * 60) * 360;
        // this.degreesSeconds = (now.getUTCSeconds() * 1000 + now.getUTCMilliseconds()) / 60000 * 360;
        this.degreesSeconds = (now.getUTCSeconds() / 60 * 360 )
        this.degreesMinutes = now.getUTCMinutes() / 60 * 360;
      }
      else {
        this.degreesHours = (now.getHours() * 60 + now.getMinutes()) / (12 * 60) * 360;
        this.degreesSeconds = (now.getSeconds() * 1000 + now.getMilliseconds()) / 60000 * 360;
        this.degreesMinutes = now.getMinutes() / 60 * 360;
      }
    }
  }



} // End of ClockfaceComponent

