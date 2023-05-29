import { Injectable } from '@angular/core';
import { StateService } from '../services/state.service';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private titles = new Map<string, string>();

  constructor(private ss: StateService) {
  }

  setTitle(pageName: string, title: string) {
    this.titles.set(pageName, title);
    if (pageName === this.ss.currentRoute) {
      if (document.title !== title) {
        document.title = title;
      }
    }
  }


}
