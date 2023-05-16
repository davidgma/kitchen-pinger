import { Component } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-icon-edit',
  templateUrl: './icon-edit.component.html',
  styleUrls: ['./icon-edit.component.scss']
})
export class IconEditComponent {
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
