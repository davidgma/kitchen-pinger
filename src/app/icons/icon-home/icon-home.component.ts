import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-home',
  templateUrl: './icon-home.component.html',
  styleUrls: ['./icon-home.component.scss']
})
export class IconHomeComponent {

  @Input() iconSize = 10;
  @Input() strokeColour = "white";
  @Input() fillColour = "green";
}
