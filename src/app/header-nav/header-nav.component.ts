import { Component, OnInit } from '@angular/core';
import { StylingService } from '../services/styling.service';
import { StateService } from '../services/state.service';

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
  clockSelected = true;
  stopwatchSelected = false;
  timerSelected = false;
  settingsSelected = false;

  constructor(public cs: StylingService, private ss: StateService) { }

  ngOnInit(): void {
    this.cs.addEventListener('colour-mode', () => { this.colour(); });

    this.ss.routeChange.subscribe((newRoute) => {
      this.colour();
    });



  }

  // change the colour of the active link
  private colour() {

    this.clockIconColour = this.cs.mode.color;
    this.stopwatchIconColour = this.cs.mode.color;
    this.timerIconColour = this.cs.mode.color;
    this.settingsIconColour = this.cs.mode.color;

    this.clockSelected = false;
    this.stopwatchSelected = false;
    this.timerSelected = false;
    this.settingsSelected = false;

    switch (this.ss.currentRoute) {
      case "/clock":
      case "/":
        this.clockSelected = true;
        break;
      case "/stopwatch":
        this.stopwatchSelected = true;
        break;
      case "/timer":
        this.timerSelected = true;
        break;
      case "/settings":
        this.settingsSelected = true;
        break;
    }
  }

}
