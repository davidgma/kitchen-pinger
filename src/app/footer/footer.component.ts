import { Component } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public cs: StylingService) {
    cs.addEventListener('resize', () => this.size());
  }

  style = {
    "display": "flex",
    "flex-direction": this.cs.containerDirection,
    "width": this.cs.lineWidth,
    "height": this.cs.lineHeight,
    "padding": "0px"
  }

  private size() {
    this.style["flex-direction"] = this.cs.containerDirection;
    this.style["width"] = this.cs.lineWidth;
    this.style["height"] = this.cs.lineHeight;
  }
}
