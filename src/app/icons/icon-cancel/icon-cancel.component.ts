import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-cancel',
  templateUrl: './icon-cancel.component.html',
  styleUrls: ['./icon-cancel.component.scss']
})
export class IconCancelComponent  {
  @Input() iconSize = 10;
  @Input() strokeColour = "white";
  @Input() fillColour = "green";
  @Input() selected = false;
}
