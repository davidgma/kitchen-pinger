import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent {
  // For getting the clock size from the parent component
  @Input() clockSize = 0;

  // For getting the clock time from the parent component
  @Input() clockTime = new Date();
  @Input() UTC = false;

  // For getting the background colour (which actually sets the colours of the hands, diallines and pin) from the parent component
  @Input() colour = "green";
}
