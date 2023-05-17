import { Component } from '@angular/core';
import { StylingService } from './styling.service';
import { TimeService } from './time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'pinger';

  constructor(public cs: StylingService, public ts: TimeService) {
    cs.addEventListener('resize', () => this.size());
    cs.addEventListener('colour-mode', () => {
      this.bodyStyle.color = this.cs.mode["color"];
      this.bodyStyle['background-color'] = this.cs.mode["background-color"];
    });
    ts.setToCurrentTime();
    onload = () => { console.log('Page loaded.'); };
  }

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


  ngOnInit() {
    console.log("In ngOnInit");
  }

  ngAfterViewInit() {
    console.log("In ngAfterViewInit");
  }

  private size() {
    this.screenStyle["flex-direction"] = this.cs.containerDirection;
  }
}

