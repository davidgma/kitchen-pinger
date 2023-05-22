import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-icon-settings',
  templateUrl: './icon-settings.component.html',
  styleUrls: ['./icon-settings.component.scss']
})
export class IconSettingsComponent {

  @Input() iconSize = 80;

  // For setting the stroke colour by the parent component
  @Input() strokeColour = "green";

  style = {
    "height": "80px",
    "width": "90px",
    "stroke": this.strokeColour,
    "strokeWidth": "3",
    "fill": "grey",
    "padding": "10px"
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
    this.style["height"] = (newSize * 0.9).toFixed() + "px";
    this.style["width"] = (newSize * 1).toFixed() + "px";
  }
}
