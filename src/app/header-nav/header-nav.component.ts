import { Component, OnInit } from '@angular/core';
import { StylingService } from '../services/styling.service';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  iconSize = 80;

  // To allow for different colours of icons
  clockIconColour: string = "";
  stopwatchIconColour: string = "";
  timerIconColour: string = "";
  settingsIconColour: string = "";
  private currentRoute = "/clock";

  constructor(public cs: StylingService, private router: Router) {}

  ngOnInit(): void {
    this.cs.addEventListener('resize', () => this.size());
    this.cs.addEventListener('colour-mode', () => {this.colour();});

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.colour();
      }
    });

  }

  headerStyle = {
    "width": this.cs.lineWidth,
    "height": this.cs.lineHeight,
    "display": "flex",
    "flex-direction": this.cs.containerDirection,
  }

  navStyle = {
    "display": "flex",
    "flex-direction": this.cs.navDirection,
    "width": this.cs.lineWidth,
    "height": this.cs.lineHeight,
    "justify-content": "space-around",
    "align-items": "center"
  }

  lineStyle = {
    "width": this.cs.lineWidth,
    "height": "auto",
    "border-bottom": "1px solid",
    "border-right": "none"
  }

  private size() {

    this.headerStyle["flex-direction"] = this.cs.containerDirection;
    this.headerStyle["width"] = this.cs.lineWidth;
    this.headerStyle["height"] = this.cs.lineHeight;

    this.navStyle["flex-direction"] = this.cs.navDirection;
    this.navStyle["width"] = this.cs.lineWidth;
    this.navStyle["height"] = this.cs.lineHeight;
    this.iconSize = this.getIconSize();

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



  getIconSize(): number {
    // console.log("getIconSize called");

    return Math.max(this.cs.iconMinimumSize, this.cs.clockSize / this.cs.iconScale);
  }

  private colour() {
    this.clockIconColour = this.cs.mode.color;
    this.stopwatchIconColour = this.cs.mode.color;
    this.timerIconColour = this.cs.mode.color;
    this.settingsIconColour = this.cs.mode.color;

    switch (this.currentRoute) {
      case "/clock":
        this.clockIconColour = "red";
        break;
      case "/stopwatch":
        this.stopwatchIconColour = "red";
        break;
      case "/timer":
        this.timerIconColour = "red";
        break;
      case "/settings":
        this.settingsIconColour = "red";
        break;
    }
  }

}
