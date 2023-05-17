import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-icon-day',
  templateUrl: './icon-day.component.html',
  styleUrls: ['./icon-day.component.scss']
})
export class IconDayComponent {

  // For setting the icon size by the parent component
  @Input() iconSize = 80;

  // For setting the stroke colour by the parent component
  @Input() strokeColour = "green";

  style = {
    "height": this.iconSize.toFixed()  + "px",
    "stroke": this.strokeColour,
    "strokeWidth": "14",
    "fill": "grey"
  }

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let variableName in changes) {
      let change = changes[variableName];
      if (variableName === "iconSize") {
        this.size(change.currentValue);
      }
      if (variableName === "strokeColour") {
        this.style["stroke"] = change.currentValue;
      }
    }
  }

  private size(newSize: number) {
    this.style["height"] = newSize.toFixed() + "px";
  }
}
