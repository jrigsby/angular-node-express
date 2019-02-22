import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { TcrappService} from './tcrapp.service';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'div.sb-site-container',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(public service:TcrappService, private titleService: Title ) {
    service.title = "Home";
    service.setAnimated();
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    //engage global function to execute wow function after view loaded
    (window as any).tcr.leftNav.init();
  }
}
