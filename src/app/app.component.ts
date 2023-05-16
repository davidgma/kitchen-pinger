import { Component } from '@angular/core';
import { StylingService } from './styling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'pinger';

  bodyStyle = {
    "font-family": "Arial, Helvetica, sans-serif",
    "width": "100vw",
    "height": "100vh",
    "z-index": 1,
    "color": this.cs.mode["color"], // off-white
    "background-color": this.cs.mode["background-color"] // dark grey
  }

  screenStyle = {
    "position": "relative",
    "height": "100%",
    "display": "flex",
    "align-items": "center",
    "justify-content": "space-between",
    "flex-direction": this.cs.containerDirection,
    "padding": "20px"
  }

  constructor(public cs: StylingService) {
    cs.addEventListener('resize', () => this.size());
  }

  ngOnInit() {
    console.log("In ngOnInit");
  }

  private size() {
    this.screenStyle["flex-direction"] = this.cs.containerDirection;
  }
}

// interface IBodyStyle {
//   "color": string;
//   "background-color": string;
// }
