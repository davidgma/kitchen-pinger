import { Component, OnInit } from '@angular/core';
import { StylingService } from './styling.service';
import { TimeService } from './time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'pinger';

  // For monitoring the viewport height and width because
  // for some reason there's a lag between the window load
  // and the final values
  vw = 0;
  vh = 0;

  constructor(public cs: StylingService, public ts: TimeService) {
    cs.addEventListener('resize', () => this.size());
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

  screenStyle = {
    "position": "relative",
    "height": "100%",
    "display": "flex",
    "justify-content": "space-between",
    "flex-direction": this.cs.containerDirection,
    // "align-items": "center",
    // "padding": "20px"
  }


  ngOnInit() {
    // console.log("In ngOnInit");

    // Useful for future reference:
    // onfocus = () => { console.log('App focused.'); };
    // document.onvisibilitychange = ((event) => {
    //   console.log("Visibility: " + document.visibilityState);
    // });
    // This syntax seems to work for element events
    // https://developer.mozilla.org/en-US/docs/Web/API/Element
    // onkeydown = () => { console.log('key down.'); };
    // console.log("ariaCurrent: " + frameElement?.ariaCurrent);

  }

  // ngAfterContentInit() {
  //   console.log("In ngAfterContentInit");
  // }

  // ngAfterViewInit() {
  //   console.log("In ngAfterViewInit");
  // }

  // ngAfterViewChecked() {
  //   console.log("In ngAfterViewChecked");

  // }

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

  private size() {
    this.screenStyle["flex-direction"] = this.cs.containerDirection;
  }

  // This worked:
  // in template: (onclick)="clockClicked($event)"
  // clockClicked(event: Event) {
  //   console.log("The clockface was clicked.");
  //   console.log(event);
  // }



}

