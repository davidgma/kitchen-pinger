import { Component } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-icon-settings',
  templateUrl: './icon-settings.component.html',
  styleUrls: ['./icon-settings.component.scss']
})
export class IconSettingsComponent {

  // height: string = "80";
  // stroke: string = "white";
  // strokeWidth: string = "3";
  // fill: string = "gray";

  style = {
    "height": "80px",
    "width": "90px",
    "stroke": this.cs.mode.color,
    "strokeWidth": "3",
    "fill": "grey"
  }

  constructor(public cs: StylingService) {
    cs.addEventListener('resize', () => this.size());
  }

  private size() {
    this.style["height"] = this.cs.iconSize + "px";
    this.style["width"] = this.cs.iconSize * 1.1 + "px";
  }
}
