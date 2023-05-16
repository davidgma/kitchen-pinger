import { Component } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-icon-home',
  templateUrl: './icon-home.component.html',
  styleUrls: ['./icon-home.component.scss']
})
export class IconHomeComponent {

  style = {
    "height": "80px",
    "stroke": this.cs.mode.color,
    "strokeWidth": "14",
    "fill": "grey"
  }

  constructor(public cs: StylingService) {
    cs.addEventListener('resize', () => this.size());
  }

  private size() {
    this.style["height"] = this.cs.iconSize + "px";
  }
}
