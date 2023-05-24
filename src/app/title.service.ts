import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  currentRoute: string = "";
  private titles = new Map<string, string>();

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      // console.log("Router event: " + event.toString());
      let cn = router.getCurrentNavigation()?.finalUrl?.toString();
      if (cn !== undefined) {
        if (this.currentRoute !== cn) {
          this.currentRoute = cn;
          console.log("New current route: " + this.currentRoute);
        }
      }


     });
  }

  setTitle(pageName: string, title: string) {
    this.titles.set(pageName, title);
    if (pageName === this.currentRoute) {
      if (document.title !== title) {
        document.title = title;
      }
    }
  }


}
