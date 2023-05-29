import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-stopwatch',
  templateUrl: './icon-stopwatch.component.html',
  styleUrls: ['./icon-stopwatch.component.scss']
})
export class IconStopwatchComponent {
  @Input() iconSize = 10;
  @Input() strokeColour = "white";
  @Input() fillColour = "green";
  @Input() selected = false;
}
