import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-reset',
  templateUrl: './icon-reset.component.html',
  styleUrls: ['./icon-reset.component.scss']
})
export class IconResetComponent {
  @Input() iconSize = 10;
  @Input() strokeColour = "white";
  @Input() fillColour = "green";
  @Input() selected = false;
}
