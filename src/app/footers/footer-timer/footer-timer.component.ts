import { Component, OnInit } from '@angular/core';
import { StylingService } from '../../services/styling.service';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-footer-timer',
  templateUrl: './footer-timer.component.html',
  styleUrls: ['./footer-timer.component.scss']
})
export class FooterTimerComponent {

  constructor(public cs: StylingService, public ts: TimeService) { }

  cancelTimer(event: MouseEvent) {
    console.log("In cancelTimer");

  }
}
