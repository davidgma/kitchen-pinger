import { Component, Input, SimpleChanges } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-icon-settings',
  templateUrl: './icon-settings.component.html',
  styleUrls: ['./icon-settings.component.scss']
})
export class IconSettingsComponent extends IconComponent {

  constructor() {
    super();
    this.style.strokeWidth = "2%";
  }


}
