import { Component, Input, SimpleChanges } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-icon-settings',
  templateUrl: './icon-settings.component.html',
  styleUrls: ['./icon-settings.component.scss']
})
export class IconSettingsComponent {

  @Input() iconSize = 80;

  style = {
    "height": "80px",
    "width": "90px",
    "stroke": this.cs.mode.color,
    "strokeWidth": "3",
    "fill": "grey"
  }

  constructor(public cs: StylingService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let variableName in changes) {
      let change = changes[variableName];
      if (variableName === "iconSize") {
        this.size(change.currentValue);
      }
    }
  }

  private size(newSize: number) {
    this.style["height"] = (newSize / this.cs.iconScale).toFixed() + "px";
    this.style["width"] = (newSize / this.cs.iconScale * 1.1).toFixed() + "px";
  }
}
