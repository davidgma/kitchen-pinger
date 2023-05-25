import { Component, OnInit } from '@angular/core';
import { StylingService } from '../styling.service';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-footer-stopwatch',
  templateUrl: './footer-stopwatch.component.html',
  styleUrls: ['./footer-stopwatch.component.scss']
})
export class FooterStopwatchComponent implements OnInit {
  strokeColour = "white";
  fillColour = "blue";
  iconSize = 80;

  constructor(public cs: StylingService, private ts: TimeService) {
    cs.addEventListener('resize', () => this.size());
  }

  ngOnInit(): void {
    this.size();
  }

  footerStyle = {
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
    "border-left": "none"
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
    this.footerStyle["flex-direction"] = this.cs.containerDirection;
    this.footerStyle["width"] = this.cs.lineWidth;
    this.footerStyle["height"] = this.cs.lineHeight;

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

    this.navStyle["flex-direction"] = this.cs.navDirection;
    this.navStyle["width"] = this.cs.lineWidth;
    this.navStyle["height"] = this.cs.lineHeight;
    this.iconSize = this.getIconSize();
  }

  getIconSize(): number {
    // console.log("getIconSize called");

    return Math.max(this.cs.iconMinimumSize, this.cs.clockSize / this.cs.iconScale);
  }

  resetStopwatch(event: MouseEvent) {
    this.ts.resetStopwatch();
  }

  startStopwatch(event: MouseEvent) {
    this.ts.startStopwatch();
  }

  pauseStopwatch(event: MouseEvent) {
    this.ts.pauseStopwatch();
  }
}
