import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-pause',
  templateUrl: './icon-pause.component.html',
  styleUrls: ['./icon-pause.component.scss']
})
export class IconPauseComponent {
  @Input() iconSize = 10;
  @Input() strokeColour = "white";
  @Input() fillColour = "green";
  @Input() selected = false;
  @Input() text: string | null = "Pause";
}
