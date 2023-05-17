import { Component, Input, SimpleChanges } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-icon-home',
  templateUrl: './icon-home.component.html',
  styleUrls: ['./icon-home.component.scss']
})
export class IconHomeComponent {

  @Input() iconSize = 80;

  style = {
    "height": "80px",
    "stroke": this.cs.mode.color,
    "strokeWidth": "14",
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
  }
}
