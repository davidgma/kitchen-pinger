import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-icon-edit',
  templateUrl: './icon-edit.component.html',
  styleUrls: ['./icon-edit.component.scss']
})
export class IconEditComponent {

  @Input() iconSize = 80;

  // For setting the stroke colour by the parent component
  @Input() strokeColour = "green";

  style = {
    "height": "80px",
    "stroke": this.strokeColour,
    "strokeWidth": "14",
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
    this.style["height"] = newSize.toFixed() + "px";
  }
}
