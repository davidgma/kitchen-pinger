import { Component, OnInit } from '@angular/core';
import { StylingService } from '../../services/styling.service';
import { TimeService } from '../../services/time.service';
// import { IntervalService } from '../interval.service';

@Component({
  selector: 'app-page-stopwatch',
  templateUrl: './page-stopwatch.component.html',
  styleUrls: ['./page-stopwatch.component.scss']
})
export class PageStopwatchComponent implements OnInit {


  constructor(public cs: StylingService, public ts: TimeService) {
  }

  ngOnInit(): void {
    this.cs.addEventListener('resize', () => this.size());
    this.ts.initialiseStopwatch();
  }

  screenStyle = {
    "position": "relative",
    "height": "100%",
    "display": "flex",
    "align-items": "center",
    "justify-content": "space-between",
    "flex-direction": this.cs.containerDirection,
  }



  private size() {
    this.screenStyle["flex-direction"] = this.cs.containerDirection;
  }




}
