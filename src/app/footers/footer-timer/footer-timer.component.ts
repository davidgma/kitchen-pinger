import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-footer-timer',
  templateUrl: './footer-timer.component.html',
  styleUrls: ['./footer-timer.component.scss']
})
export class FooterTimerComponent extends FooterComponent implements OnInit {


  cancelTimer(event: MouseEvent) {
    console.log("In cancelTimer");

  }
}
