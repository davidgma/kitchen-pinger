import { Injectable } from '@angular/core';
import { IntervalService } from './interval.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  time: Date = new Date();

  constructor(private intervalService: IntervalService) { }

  // Starts updating the time periodically based on the
  // current time of day.
  setToCurrentTime() {

    // Set up an interval to subscribe to.
    // This uses quite a bit of cpu but is smooth:
    // this.intervalService.start("clock-update", 40, false);
    // This uses much less cpu and ticks:
    this.intervalService.start("clock-update", 1000, true);

    this.intervalService.addEventListener('clock-update', () => {

      // set the time to be used externally
      this.time = new Date();

      // Set the title text
      let timeString = this.time.getHours().toFixed().padStart(2, '0') + ":" + this.time.getMinutes().toFixed().padStart(2, '0')
        + ":" + this.time.getSeconds().toFixed().padStart(2, '0')
        ;
      if (document.title !== timeString) {
        document.title = timeString;
      }

    });

    // How to stop the interval
    // setTimeout(() => {
    //   this.intervalService.stop("clock-update");
    // }, 10000);
  }
}
