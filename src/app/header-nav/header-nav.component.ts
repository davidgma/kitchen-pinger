import { Component } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {
  constructor(public cs: StylingService) {
    cs.addEventListener('resize', () => this.size());
  }

  style = {
    "display": "flex",
    "flex-direction": this.cs.navDirection,
    "width": this.cs.lineWidth,
    "height": this.cs.lineHeight,
    "justify-content": "space-around"
  }

  private size() {
    this.style["flex-direction"] = this.cs.navDirection;
    this.style["width"] = this.cs.lineWidth;
    this.style["height"] = this.cs.lineHeight;
  }
}
