import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TcrappService} from '../tcrapp.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PageNotFoundComponent implements OnInit {

  constructor(public service:TcrappService) {
    service.title = "404";
  }

  ngOnInit() {
  }

}
