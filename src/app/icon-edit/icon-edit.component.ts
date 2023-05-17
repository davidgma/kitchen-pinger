import { Component, Input, SimpleChanges } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-icon-edit',
  templateUrl: './icon-edit.component.html',
  styleUrls: ['./icon-edit.component.scss']
})
export class IconEditComponent {

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
