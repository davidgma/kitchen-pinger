import { Injectable } from '@angular/core';
import { IntervalService, Interval } from './interval.service';
import { TitleService } from './title.service';
import { MusicService } from './sound.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  clockTime: Date = new Date();
  stopwatchTime: Date = new Date(2000, 0, 1, 0, 0, 0);
  stopwatchStartTime = new Date();
  // Used for the toggling of start/pause
  isStopwatchRunning = false;
  private stopwatchInterval?: Interval;
  // For pausing and restarting
  private stopwatchTimeSoFar: number = 0;

  // For the pinger (= timer)
  timerTime: Date = new Date(2000, 0, 1, 0, 0, 0);
  timerStartTime = new Date();
  isTimerRunning = false;
  private timerInterval?: Interval;
  private timerKeysPressed = new Array<number>();
  private timerOriginalTime = new Date();
  // private timerTimeSoFar: number = 0;
  private worker: Worker;



  constructor(private intervalService: IntervalService,
    private titleService: TitleService, private ms: MusicService) {
    this.worker = this.setUpWorker();

  }

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

    // this.worker.
    window.fram

    this.stopwatchStartTime = new Date(
      (new Date()).valueOf() - this.stopwatchTimeSoFar
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
    this.stopwatchTimeSoFar = (new Date()).valueOf() - this.stopwatchStartTime.valueOf();
  }

  resetStopwatch() {
    let isRunning = this.isStopwatchRunning;
    if (isRunning) {
      this.pauseStopwatch();
    }
    this.stopwatchTime = new Date(2000, 0, 1, 0, 0, 0);
    this.stopwatchStartTime = new Date();
    this.stopwatchTimeSoFar = 0;
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


  startTimer() {
    // console.log("scheduler: " + ("scheduler" in this));


    this.timerOriginalTime = new Date(this.timerTime.valueOf());

    this.timerStartTime = new Date();

    let intervalName = "timer";

    // Unsubscribe to any existing intervals
    this.intervalService.stop(intervalName);

    // Set up an interval to subscribe to.
    this.timerInterval = this.intervalService.start(intervalName, 1000, false);

    this.timerInterval.eventEmitter.subscribe(() => {
      let now = new Date();
      let difference = now.valueOf() - this.timerStartTime.valueOf();
      difference = Math.floor(difference / 1000) * 1000;

      this.timerTime = new Date(this.timerOriginalTime.valueOf() - difference);

      // time's up
      if (this.timerTime.getFullYear() === 1999) {
        this.pauseTimer();
        this.resetTimer();
        this.ms.playAlarm();
      }

      this.titleService.setTitle("/timer",
        this.toUTCTitleString(this.timerTime));

    });

    this.isTimerRunning = true;
  }

  pauseTimer() {
    if (this.timerInterval !== null) {
      this.intervalService.stop("timer");
      this.timerInterval?.eventEmitter.unsubscribe();
    }
    this.isTimerRunning = false;
    // this.timerTimeSoFar = (new Date()).valueOf() - this.timerStartTime.valueOf();
  }

  resetTimer() {
    if (this.isTimerRunning) {
      this.pauseTimer();
    }
    this.timerTime = new Date(2000, 0, 1, 0, 0, 0);
    // this.timerStartTime = new Date();
    // this.timerTimeSoFar = 0;
    this.timerKeysPressed = new Array<number>();
    this.titleService.setTitle("/timer",
      this.toUTCTitleString(this.timerTime));

  }

  toggleTimer() {
    if (this.isTimerRunning) {
      this.pauseTimer();
    }
    else {
      this.startTimer();
    }
  }

  adjustPingerTime(value: number) {
    this.timerKeysPressed.push(value);
    let midnight = new Date(2000, 0, 1, 0, 0, 0);
    // console.log(this.timerKeysPressed.toString());
    if (this.timerKeysPressed.length == 1) {
      this.timerTime = new Date(midnight.valueOf() + this.timerKeysPressed[0] * 1000);
    }
    if (this.timerKeysPressed.length == 2) {
      let seconds = this.timerKeysPressed[0] * 10 + this.timerKeysPressed[1];
      this.timerTime = new Date(midnight.valueOf() + seconds * 1000);
    }
    if (this.timerKeysPressed.length == 3) {
      let seconds = this.timerKeysPressed[0] * 60 + this.timerKeysPressed[1] * 10 + this.timerKeysPressed[2];
      this.timerTime = new Date(midnight.valueOf() + seconds * 1000);
    }
    if (this.timerKeysPressed.length == 4) {
      let seconds = this.timerKeysPressed[0] * 600
        + this.timerKeysPressed[1] * 60 + this.timerKeysPressed[2] * 10 + this.timerKeysPressed[3];
      this.timerTime = new Date(midnight.valueOf() + seconds * 1000);
    }
    if (this.timerKeysPressed.length == 5) {
      let seconds =
        this.timerKeysPressed[0] * 60 * 60
        + this.timerKeysPressed[1] * 600
        + this.timerKeysPressed[2] * 60
        + this.timerKeysPressed[3] * 10
        + this.timerKeysPressed[4];
      this.timerTime = new Date(midnight.valueOf() + seconds * 1000);
    }
    if (this.timerKeysPressed.length == 6) {
      let seconds =
        this.timerKeysPressed[0] * 60 * 60 * 10
        + this.timerKeysPressed[1] * 60 * 60
        + this.timerKeysPressed[2] * 600
        + this.timerKeysPressed[3] * 60
        + this.timerKeysPressed[4] * 10
        + this.timerKeysPressed[5];
      this.timerTime = new Date(midnight.valueOf() + seconds * 1000);
    }

    this.titleService.setTitle("/timer",
      this.toUTCTitleString(this.timerTime));

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

  private setUpWorker(): Worker {

    // Set up the web worker which is needed for the timer to
    // allow it to play the alarm even if the app has lost focus.
    // if (typeof Worker !== 'undefined') {
    // Create a new
    const worker = new Worker(new URL('./time.worker', import.meta.url));
    worker.onmessage = ({ data }) => {
      console.log(`page got message: ${data}`);
    };
    worker.postMessage('hello');
    return worker;
    // } else {
    //   // Web Workers are not supported in this environment.
    //   // You should add a fallback so that your program still executes correctly.
    // }
  }


}


