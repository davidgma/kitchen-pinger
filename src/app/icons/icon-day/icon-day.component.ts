import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-day',
  templateUrl: './icon-day.component.html',
  styleUrls: ['./icon-day.component.scss']
})
export class IconDayComponent {
  @Input() iconSize = 10;
  @Input() strokeColour = "white";
  @Input() fillColour = "green";
  @Input() selected = false;

}
