import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-shortcut',
  templateUrl: './icon-shortcut.component.html',
  styleUrls: ['./icon-shortcut.component.scss']
})
export class IconShortcutComponent {
  @Input() iconSize = 10;
  @Input() strokeColour = "white";
  @Input() fillColour = "green";
  @Input() selected = false;
}
