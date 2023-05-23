import { Component } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {

  strokeColour = "white";
  fillColour = "blue";
  iconSize = 80;

  constructor(public cs: StylingService) {
    cs.addEventListener('resize', () => this.size());
    this.strokeColour = cs.mode.color;
  }

  navStyle = {
    "display": "flex",
    "flex-direction": this.cs.navDirection,
    "width": this.cs.lineWidth,
    "height": this.cs.lineHeight,
    "justify-content": "space-around",
    "align-items": "center"
  }

  private size() {
    // console.log("size in header nav called");

    this.navStyle["flex-direction"] = this.cs.navDirection;
    this.navStyle["width"] = this.cs.lineWidth;
    this.navStyle["height"] = this.cs.lineHeight;
    this.iconSize = this.getIconSize();
  }

  toggleColours() {
    // console.log("toggling colours");

    if (this.cs.mode === this.cs.darkMode) {
      this.cs.mode = this.cs.lightMode
    }
    else {
      this.cs.mode = this.cs.darkMode;
    }

    this.strokeColour = this.cs.mode.color;
  }

  getIconSize(): number {
    // console.log("getIconSize called");

    return Math.max(this.cs.iconMinimumSize, this.cs.clockSize / this.cs.iconScale);
  }

}
