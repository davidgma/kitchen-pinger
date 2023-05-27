import { Component } from '@angular/core';
import { StylingService } from '../../services/styling.service';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-page-timer',
  templateUrl: './page-timer.component.html',
  styleUrls: ['./page-timer.component.scss']
})
export class PageTimerComponent {
  constructor(public cs: StylingService, public ts: TimeService) {
    cs.addEventListener('resize', () => this.size());
  }

  screenStyle = {
    "position": "relative",
    "height": "100%",
    "display": "flex",
    "align-items": "center",
    "justify-content": "space-between",
    "flex-direction": this.cs.containerDirection,
    // "background-color": "green"
    // "padding": "20px"
  }

  private size() {
    this.screenStyle["flex-direction"] = this.cs.containerDirection;
  }
}
