import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-digital',
  templateUrl: './icon-digital.component.html',
  styleUrls: ['./icon-digital.component.scss']
})
export class IconDigitalComponent {
  @Input() iconSize = 10;
  @Input() strokeColour = "white";
  @Input() fillColour = "green";
  @Input() selected = false;
}
