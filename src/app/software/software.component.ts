import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TcrappService} from '../tcrapp.service';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SoftwareComponent implements OnInit {

  constructor(public service:TcrappService) {
    service.wow = true;
    service.title = "Software";
    this.service.setCookie();
  }

  ngOnInit() {
  }

}
