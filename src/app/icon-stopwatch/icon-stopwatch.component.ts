import { Component, Input, SimpleChanges } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-icon-stopwatch',
  templateUrl: './icon-stopwatch.component.html',
  styleUrls: ['./icon-stopwatch.component.scss']
})
export class IconStopwatchComponent extends IconComponent {

  constructor() {
    super();
    this.style.strokeWidth = "2%";
  }
}
