import { Component } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent {

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

  openMainVersion(event: MouseEvent) {
    if (window != null) {
      window.open('https://pinger.freshfood.rocks', '_blank');
    }
  }

  editOnStackblitz(event: MouseEvent) {
    if (window != null) {
      window.open('https://stackblitz.com/edit/css-clock', '_blank');
    }
  }
}

