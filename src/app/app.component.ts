import { Component } from '@angular/core';
import { StylingService } from './styling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kitchen-pinger';
  flexDirection = 'column';

  constructor(public cs: StylingService) {

  }
}
