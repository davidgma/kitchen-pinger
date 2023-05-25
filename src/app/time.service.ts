import { Injectable } from '@angular/core';
import { IntervalService, Interval } from './interval.service';
import { TitleService } from './title.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  clockTime: Date = new Date();
  stopwatchTime: Date = new Date(2000, 0, 0, 0, 0, 0);
  isStopwatchRunning = false;
  private stopwatchInterval?: Interval;


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
    this.stopwatchTime = new Date(2000, 0, 0, 0, 0, 0);
    this.titleService.setTitle("/stopwatch",
      this.toTitleString(this.stopwatchTime));
  }

  startStopwatch() {
    let intervalName = "stopwatch";

    // Unsubscribe to any existing intervals
    this.intervalService.stop(intervalName);

    // Set up an interval to subscribe to.
    this.stopwatchInterval = this.intervalService.start(intervalName, 1000, false);

    this.stopwatchInterval.eventEmitter.subscribe(() => {
      // console.log("interval emmitted");
      this.stopwatchTime = new Date(this.stopwatchTime.valueOf() + 1000);
      // console.log(this.time);

      this.titleService.setTitle("/stopwatch",
        this.toTitleString(this.stopwatchTime));

    });

    this.isStopwatchRunning = true;
  }

  pauseStopwatch() {
    if (this.stopwatchInterval !== null) {

      this.intervalService.stop("stopwatch");
      this.stopwatchInterval?.eventEmitter.unsubscribe();
    }
    console.log("here1");
    this.isStopwatchRunning = false;
    console.log("here2");
  }

  resetStopwatch() {
    this.stopwatchTime = new Date(2000, 0, 0, 0, 0, 0);
    this.titleService.setTitle("/stopwatch",
      this.toTitleString(this.stopwatchTime));
  }

  private toTitleString(date: Date) {
    return date.getHours().toFixed().padStart(2, '0') + ":" + date.getMinutes().toFixed().padStart(2, '0')
      + ":" + date.getSeconds().toFixed().padStart(2, '0')
      ;
  }

}
