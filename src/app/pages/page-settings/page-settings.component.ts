import { Component } from '@angular/core';
import { StylingService } from '../../services/styling.service';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.scss']
})
export class PageSettingsComponent {

  strokeColour = "white";
  fillColour = "blue";
  iconSize = 80;

  constructor(public cs: StylingService) {
    cs.addEventListener('resize', () => this.size());
    this.strokeColour = cs.mode.color;
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

  private size() {
    // console.log("size in header nav called");

    this.iconSize = this.getIconSize();
  }

  getIconSize(): number {
    // console.log("getIconSize called");

    return Math.max(this.cs.iconMinimumSize, this.cs.clockSize / this.cs.iconScale);
  }

}
