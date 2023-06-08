import { Component } from '@angular/core';
import { StylingService } from '../../services/styling.service';
import { TimeService } from '../../services/time.service';
import { StateService } from 'src/app/services/state.service';
import { MusicService } from 'src/app/services/sound.service';

@Component({
  selector: 'app-page-timer',
  templateUrl: './page-timer.component.html',
  styleUrls: ['./page-timer.component.scss']
})
export class PageTimerComponent {
  constructor(public cs: StylingService, public ts: TimeService, public ss: StateService, public ms: MusicService) {
  }

  toggleTimer() {
    this.ts.toggleTimer();
  }

  resetTimer() {
    this.ts.resetTimer();
  }

  keyPressed(value: number) {
    this.ts.adjustPingerTime(value);
  }

  keyPressedTwice(value: number) {
    this.ts.adjustPingerTime(value);
    this.ts.adjustPingerTime(value);
  }
//(click)="ms.playAlarm()"

}
