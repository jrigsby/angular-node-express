import { Component, ViewEncapsulation } from '@angular/core';
import { TcrappService} from '../tcrapp.service';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent {

  constructor(public service:TcrappService) {
  }
}
