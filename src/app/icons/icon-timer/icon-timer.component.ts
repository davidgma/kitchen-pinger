import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-timer',
  templateUrl: './icon-timer.component.html',
  styleUrls: ['./icon-timer.component.scss']
})
export class IconTimerComponent {
  @Input() iconSize = 10;
  @Input() strokeColour = "white";
  @Input() fillColour = "green";
  @Input() selected = false;
}
