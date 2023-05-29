import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StateService {

  currentRoute: string = "";
  currentClock: string = "analogue";
  routeChange = new EventEmitter<string>();

  constructor(private router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log("New route: " + event.url);
        this.currentRoute = event.url;
        this.routeChange.emit(event.url);
      }
    });
  }

  toggleClockType() {
    if (this.currentClock === "analogue") {
      this.currentClock = "digital";
    }
    else {
      this.currentClock = "analogue";
    }
  }

}
