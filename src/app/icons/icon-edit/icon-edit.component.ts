import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-edit',
  templateUrl: './icon-edit.component.html',
  styleUrls: ['./icon-edit.component.scss']
})
export class IconEditComponent {

  @Input() iconSize = 10;
  @Input() strokeColour = "white";
  @Input() fillColour = "green";
  @Input() selected = false;
}
