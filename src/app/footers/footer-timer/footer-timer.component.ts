import { Component, OnInit } from '@angular/core';
import { StylingService } from '../../services/styling.service';
import { TimeService } from '../../services/time.service';
import { StateService } from 'src/app/services/state.service';
import { MusicService } from 'src/app/services/sound.service';

@Component({
  selector: 'app-footer-timer',
  templateUrl: './footer-timer.component.html',
  styleUrls: ['./footer-timer.component.scss']
})
export class FooterTimerComponent {

  constructor(public cs: StylingService, public ts: TimeService, public ss: StateService, public ms: MusicService) { }

  cancelTimer(event: MouseEvent) {
    this.ms.cancelAlarm();

  }
}
