import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TcrappService} from '../tcrapp.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  constructor(public service:TcrappService) {
    service.title = "Projects";
    service.setCookie();
  }

  ngOnInit() {
  }

}
