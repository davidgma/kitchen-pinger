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
    this.cs.addEventListener('colour-mode', () => {this.colour();});

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.colour();
      }
    });

  }

  // change the colour of the active link
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
