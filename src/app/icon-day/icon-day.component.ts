import { Component } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-icon-day',
  templateUrl: './icon-day.component.html',
  styleUrls: ['./icon-day.component.scss']
})
export class IconDayComponent {

  style = {
    "height": "80px",
    "stroke": this.cs.mode.color,
    "strokeWidth": "14",
    "fill": "grey"
  }

  constructor(public cs: StylingService) {
    cs.addEventListener('resize', () => this.size());
  }

  private size() {
    this.style["height"] = this.cs.iconSize + "px";
  }
}
