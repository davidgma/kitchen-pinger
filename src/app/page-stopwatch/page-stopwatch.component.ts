import { Component } from '@angular/core';
import { StylingService } from '../styling.service';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-page-stopwatch',
  templateUrl: './page-stopwatch.component.html',
  styleUrls: ['./page-stopwatch.component.scss']
})
export class PageStopwatchComponent {
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
