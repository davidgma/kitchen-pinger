import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-moon',
  templateUrl: './icon-moon.component.html',
  styleUrls: ['./icon-moon.component.scss']
})
export class IconMoonComponent {
  @Input() iconSize = 10;
  @Input() strokeColour = "white";
  @Input() fillColour = "green";
  @Input() selected = false;
}
