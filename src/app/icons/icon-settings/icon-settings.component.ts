import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-settings',
  templateUrl: './icon-settings.component.html',
  styleUrls: ['./icon-settings.component.scss']
})
export class IconSettingsComponent {
  @Input() iconSize = 10;
  @Input() strokeColour = "white";
  @Input() fillColour = "green";
  @Input() selected = false;
}
