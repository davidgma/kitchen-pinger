import { Component, OnInit } from '@angular/core';
import { StylingService } from '../../services/styling.service';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-footer-stopwatch',
  templateUrl: './footer-stopwatch.component.html',
  styleUrls: ['./footer-stopwatch.component.scss']
})
export class FooterStopwatchComponent {

  constructor(public cs: StylingService, public ts: TimeService) { }

  resetStopwatch(event: MouseEvent) {
    this.ts.resetStopwatch();
  }

  startStopwatch(event: MouseEvent) {
    this.ts.startStopwatch();
  }

  pauseStopwatch(event: MouseEvent) {
    this.ts.pauseStopwatch();
  }
}
