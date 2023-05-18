import { Component } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public cs: StylingService) {
    cs.addEventListener('resize', () => this.size());
  }

  style = {
    "width": this.cs.lineWidth,
    "height": this.cs.lineHeight,
    "display": "flex",
    "flex-direction": this.cs.containerDirection,
  }

  lineStyle = {
    "width": this.cs.lineWidth,
    "height": "auto",
    "border-bottom": "1px solid",
    "border-right": "none",
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
      this.lineStyle['border-bottom'] = "1px solid";
      this.lineStyle['border-right'] = "none";
    }
    else if (this.cs.containerDirection === "row") {
      this.lineStyle.width = "auto";
      this.lineStyle.height = this.cs.lineHeight;
      this.lineStyle['border-bottom'] = "none";
      this.lineStyle['border-right'] = "1px solid";
    }

  }
}


