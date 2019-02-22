import { Component, ViewEncapsulation } from '@angular/core';
import { TcrappService} from '../tcrapp.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None
  //template: `<div>{{service.title}}</div>`
})
export class HomeComponent {

  constructor(public service:TcrappService) {
    service.title = "Home";
    service.setCookie();
  }
}
