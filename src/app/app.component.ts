import { Component } from '@angular/core';
import { StylingService } from './services/styling.service';
import { TimeService } from './services/time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'pinger';

  // For monitoring the viewport height and width because
  // for some reason there's a lag between the window load
  // and the final values
  vw = 0;
  vh = 0;

  constructor(public cs: StylingService, public ts: TimeService) {
    cs.addEventListener('colour-mode', () => {
      this.bodyStyle.color = this.cs.mode["color"];
      this.bodyStyle['background-color'] = this.cs.mode["background-color"];
    });
    ts.setToCurrentTime();
    onload = () => {
      // console.log('Page loaded.');
      this.cs.placeItems();
    };
  }

  bodyStyle = {
    "font-family": "Arial, Helvetica, sans-serif",
    "width": "100vw",
    "height": "100vh",
    "z-index": 1,
    "color": this.cs.mode["color"], // off-white
    "background-color": this.cs.mode["background-color"] // dark grey
  }

  ngDoCheck() {
    // console.log("In ngDoCheck");
    if (window.innerHeight !== this.vh) {
      this.vh = window.innerHeight;
      this.cs.placeItems();
    }
    if (window.innerWidth !== this.vw) {
      this.vw = window.innerWidth;
      this.cs.placeItems();
    }
  }




}

