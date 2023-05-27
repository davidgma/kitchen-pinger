import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  // For setting the icon size by the parent component
  @Input() iconSize = 80;

  // For setting the stroke colour by the parent component
  @Input() strokeColour = "white";
  @Input() fillColour = "green";

  // protected textFontSize = "2rem";

  style = {
    "height": this.iconSize.toFixed() + "px",
    "width": this.iconSize.toFixed() + "px",
    "stroke": this.strokeColour,
    "strokeWidth": "1%",
    "fill": this.fillColour,
    // "padding": "10px"
    // "display":
  }

  sectionStyle = {
    "display": "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    "padding": "10px"
  }

  textStyle = {
    "fill": this.strokeColour,
    // "font-size": this.textFontSize,
    "stroke-width": "0.5%"
  }

  ngOnChanges(changes: SimpleChanges) {

    for (let variableName in changes) {
      // console.log("In icon ngOnChanges. VariableName: " + variableName);

      let change = changes[variableName];
      if (variableName === "iconSize") {
        this.size(change.currentValue);
      }
      if (variableName === "strokeColour") {
        // console.log("stroke changed to " + change.currentValue);
        this.style["stroke"] = change.currentValue;
        this.textStyle.fill = change.currentValue;
      }
      if (variableName === "fillColour") {
        this.style["fill"] = change.currentValue;
      }
    }
  }

  protected size(newSize: number) {
    // console.log("in icon size. newSize: " + newSize);

    this.style["height"] = newSize.toFixed() + "px";
    this.style["width"] = newSize.toFixed() + "px";
  }

}
