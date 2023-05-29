import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-clock',
  templateUrl: './icon-clock.component.html',
  styleUrls: ['./icon-clock.component.scss']
})
export class IconClockComponent {

  @Input() iconSize = 10;
  @Input() strokeColour = "white";
  @Input() fillColour = "green";
  @Input() selected = false;
}
