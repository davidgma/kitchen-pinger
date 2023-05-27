import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-footer-stopwatch',
  templateUrl: './footer-stopwatch.component.html',
  styleUrls: ['./footer-stopwatch.component.scss']
})
export class FooterStopwatchComponent extends FooterComponent implements OnInit {


  resetStopwatch(event: MouseEvent) {
    this.ts.resetStopwatch();
  }

  startStopwatch(event: MouseEvent) {
    this.ts.startStopwatch();
  }

  pauseStopwatch(event: MouseEvent) {
    this.ts.pauseStopwatch();
  }
}
