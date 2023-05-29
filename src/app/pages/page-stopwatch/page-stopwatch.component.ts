import { Component, OnInit } from '@angular/core';
import { StylingService } from '../../services/styling.service';
import { TimeService } from '../../services/time.service';
import { StateService } from 'src/app/services/state.service';
// import { IntervalService } from '../interval.service';

@Component({
  selector: 'app-page-stopwatch',
  templateUrl: './page-stopwatch.component.html',
  styleUrls: ['./page-stopwatch.component.scss']
})
export class PageStopwatchComponent implements OnInit {


  constructor(public cs: StylingService, public ts: TimeService, public ss: StateService) {
  }

  ngOnInit(): void {
    this.ts.initialiseStopwatch();
  }


}
