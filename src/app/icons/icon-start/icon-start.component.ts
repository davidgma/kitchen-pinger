import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-start',
  templateUrl: './icon-start.component.html',
  styleUrls: ['./icon-start.component.scss']
})
export class IconStartComponent {
  @Input() iconSize = 10;
  @Input() strokeColour = "white";
  @Input() fillColour = "green";
}
