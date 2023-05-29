import { Component } from '@angular/core';
import { StylingService } from '../../services/styling.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-footer-clock',
  templateUrl: './footer-clock.component.html',
  styleUrls: ['./footer-clock.component.scss']
})
export class FooterClockComponent  {
  constructor(public cs: StylingService, public ss: StateService) { }

  
}
