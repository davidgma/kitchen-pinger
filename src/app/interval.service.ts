import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntervalService {

  // private intervals = new IntervalArray();
  private intervals = new Map<string, Interval>();

  constructor() {

  }

  start(intervalName: string, intervalMilliseconds: number,
    wholeSeconds = false): Interval {

    let eventEmitter = new EventEmitter<void>();

    let interval =
      new Interval(intervalName, intervalMilliseconds, true, wholeSeconds, eventEmitter);
    this.intervals.set(intervalName, interval);
    interval.run();
    return interval;

    // console.log(this.intervals.has(intervalName));
  }

  stop(intervalName: string) {
    if (this.intervals.has(intervalName)) {
      let interval = this.intervals.get(intervalName);
      if (interval != null) {
        interval.isLive = false;
      }
    }
  }




}

export class Interval {

  constructor(
    public name: string,
    public intervalMilliseconds: number,
    public isLive: boolean,
    public wholeSeconds: boolean,
    public eventEmitter: EventEmitter<void>) {

  }

  run() {

    if (this.isLive) {
      let milliseconds = this.intervalMilliseconds;
      if (this.wholeSeconds) {
        milliseconds = this.millisecondsToNextSecond(
          milliseconds - 50
        );
      }
      setTimeout(() => {
        // this.parent.dispatchEvent(new CustomEvent(this.name, {}));
        this.eventEmitter.emit();
        this.run();
      }, milliseconds);
    }
  }

  // The number of milliseconds to the next whole second
  private millisecondsToNextSecond(after: number): number {
    let now = new Date();
    let next = now.valueOf() + after;
    let then = new Date(next);
    let nextSecond = new Date(then.getFullYear(), then.getMonth(),
      then.getDate(), then.getHours(), then.getMinutes(), then.getSeconds() + 1);
    let ret = nextSecond.valueOf() - now.valueOf();
    return ret;
  }

}
