import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-analogue',
  templateUrl: './icon-analogue.component.html',
  styleUrls: ['./icon-analogue.component.scss']
})
export class IconAnalogueComponent {
  @Input() iconSize = 10;
  @Input() strokeColour = "white";
  @Input() fillColour = "green";
}
