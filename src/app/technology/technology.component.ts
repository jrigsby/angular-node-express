import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TcrappService} from '../tcrapp.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TechnologyComponent implements OnInit {

  constructor(public service:TcrappService) {
    service.title = "Technology";
  }

  ngOnInit() {
  }

}
