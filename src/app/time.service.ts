import { Injectable } from '@angular/core';
import { IntervalService, Interval } from './interval.service';
import { TitleService } from './title.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  clockTime: Date = new Date();
  stopwatchTime: Date = new Date(2000, 0, 0, 0, 0, 0);
  stopwatchStartTime = new Date();
  // Used for the toggling of start/pause
  isStopwatchRunning = false;
  private stopwatchInterval?: Interval;

  // For pausing and restarting
  private timeSoFar: number = 0;

  constructor(private intervalService: IntervalService,
    private titleService: TitleService) { }

  // Starts updating the time periodically based on the
  // current time of day.
  setToCurrentTime() {

    let intervalName = "clock-update";

    // Unsubscribe to any existing intervals
    this.intervalService.stop(intervalName);

    // Set up an interval to subscribe to.
    // This uses quite a bit of cpu but is smooth:
    // let interval = this.intervalService.start(intervalName, 40, false);
    // This uses much less cpu and ticks:
    let interval = this.intervalService.start(intervalName, 1000, true);

    interval.eventEmitter.subscribe(() => {

      // set the time to be used externally
      this.clockTime = new Date();

      // Set the title text
      this.titleService.setTitle("/clock",
        this.toTitleString(this.clockTime));

    });


  }

  initialiseStopwatch() {
    this.titleService.setTitle("/stopwatch",
      this.toUTCTitleString(this.stopwatchTime));
  }

  startStopwatch() {

    this.stopwatchStartTime = new Date(
      (new Date()).valueOf() - this.timeSoFar
    );

    let intervalName = "stopwatch";

    // Unsubscribe to any existing intervals
    this.intervalService.stop(intervalName);

    // Set up an interval to subscribe to.
    this.stopwatchInterval = this.intervalService.start(intervalName, 1000, false);

    this.stopwatchInterval.eventEmitter.subscribe(() => {
      let now = new Date();
      let difference = now.valueOf() - this.stopwatchStartTime.valueOf();

      this.stopwatchTime = new Date(difference);

      this.titleService.setTitle("/stopwatch",
        this.toUTCTitleString(this.stopwatchTime));

    });

    this.isStopwatchRunning = true;
  }

  pauseStopwatch() {
    if (this.stopwatchInterval !== null) {
      this.intervalService.stop("stopwatch");
      this.stopwatchInterval?.eventEmitter.unsubscribe();
    }
    this.isStopwatchRunning = false;
    this.timeSoFar = (new Date()).valueOf() - this.stopwatchStartTime.valueOf();
  }

  resetStopwatch() {
    let isRunning = this.isStopwatchRunning;
    if (isRunning) {
      this.pauseStopwatch();
    }
    this.stopwatchTime = new Date(2000, 0, 0, 0, 0, 0);
    this.stopwatchStartTime = new Date();
    this.timeSoFar = 0;
    this.titleService.setTitle("/stopwatch",
      this.toUTCTitleString(this.stopwatchTime));

    if (isRunning) {
      this.startStopwatch();
    }
  }

  toggleStopwatch(event: MouseEvent) {
    if (this.isStopwatchRunning) {
      this.pauseStopwatch();
    }
    else {
      this.startStopwatch();
    }
  }

  private toTitleString(date: Date) {
    return date.getHours().toFixed().padStart(2, '0') + ":" + date.getMinutes().toFixed().padStart(2, '0')
      + ":" + date.getSeconds().toFixed().padStart(2, '0')
      ;
  }

  private toUTCTitleString(date: Date) {
    return date.getUTCHours().toFixed().padStart(2, '0') + ":" + date.getUTCMinutes().toFixed().padStart(2, '0')
      + ":" + date.getUTCSeconds().toFixed().padStart(2, '0')
      ;
  }

}
