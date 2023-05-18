import { Component } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public cs: StylingService) {
    cs.addEventListener('resize', () => this.size());
  }

  style = {
    "display": "flex",
    "flex-direction": this.cs.containerDirection,
    "width": this.cs.lineWidth,
    "height": this.cs.lineHeight,
    "padding": "0px"
  }

  lineStyle = {
    "width": this.cs.lineWidth,
    "height": "auto",
    "border-top": "1px solid",
    "border-left": "none",
    "padding": "5px"
  }

  private size() {
    this.style["flex-direction"] = this.cs.containerDirection;
    this.style["width"] = this.cs.lineWidth;
    this.style["height"] = this.cs.lineHeight;

    // console.log("containerDirection: " + this.cs.containerDirection);

    if (this.cs.containerDirection === "column") {
      this.lineStyle.width = this.cs.lineWidth;
      this.lineStyle.height = "auto";
      this.lineStyle['border-top'] = "1px solid";
      this.lineStyle['border-left'] = "none";
    }
    else if (this.cs.containerDirection === "row") {
      this.lineStyle.width = "auto";
      this.lineStyle.height = this.cs.lineHeight;
      this.lineStyle['border-top'] = "none";
      this.lineStyle['border-left'] = "1px solid";
    }
  }
}
