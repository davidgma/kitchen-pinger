import { Injectable } from '@angular/core';
import { IntervalService } from './interval.service';
import { TitleService } from './title.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  time: Date = new Date();

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

      let newTime = new Date();

      // Set the title text
      let timeString = newTime.getHours().toFixed().padStart(2, '0') + ":" + newTime.getMinutes().toFixed().padStart(2, '0')
      + ":" + newTime.getSeconds().toFixed().padStart(2, '0')
      ;
      this.titleService.setTitle("/clock", timeString);
      // document.title = timeString;

      // set the time to be used externally
      this.time = newTime;
      
    });


  }

  setToTimer() {

  }

}
