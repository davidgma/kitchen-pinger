import { Component } from '@angular/core';
import { StylingService } from '../../services/styling.service';
import { TimeService } from '../../services/time.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-page-clock',
  templateUrl: './page-clock.component.html',
  styleUrls: ['./page-clock.component.scss']
})
export class PageClockComponent {
  constructor(public cs: StylingService, public ts: TimeService, public ss: StateService) {
  }

}
