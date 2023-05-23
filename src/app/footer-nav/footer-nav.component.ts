import { Component } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent {

  strokeColour = "white";
  fillColour = "blue";
  iconSize = 80;

  constructor(public cs: StylingService) {
    cs.addEventListener('resize', () => this.size());
  }

  style = {
    "display": "flex",
    "flex-direction": this.cs.navDirection,
    "width": this.cs.lineWidth,
    "height": this.cs.lineHeight,
    "justify-content": "space-around",
    "align-items": "center"
  }

  private size() {
    this.style["flex-direction"] = this.cs.navDirection;
    this.style["width"] = this.cs.lineWidth;
    this.style["height"] = this.cs.lineHeight;
    this.iconSize = this.getIconSize();
  }

  openMainVersion(event: MouseEvent) {
    if (window != null) {
      window.open('https://pinger.freshfood.rocks', '_blank');
    }
  }

  editOnStackblitz(event: MouseEvent) {
    if (window != null) {
      window.open('https://stackblitz.com/edit/kitchen-pinger', '_blank');
    }
  }

  getIconSize(): number {
    // console.log("getIconSize called");

    return Math.max(this.cs.iconMinimumSize, this.cs.clockSize / this.cs.iconScale);
  }
}

