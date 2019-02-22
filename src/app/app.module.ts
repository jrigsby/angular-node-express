import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TcrappService} from './tcrapp.service';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { SoftwareComponent } from './software/software.component';
import { TechnologyComponent } from './technology/technology.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeroComponent } from './hero/hero.component';
import { CarouselComponent } from './carousel/carousel.component';

const appRoutes: Routes = [
  { path: 'home',          component: HomeComponent },
  { path: 'software',          component: SoftwareComponent },
  { path: 'technology',          component: TechnologyComponent },
  { path: 'contact',          component: ContactComponent },
  { path: 'projects',          component: ProjectsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, NavComponent, ContactComponent, SoftwareComponent, TechnologyComponent, PageNotFoundComponent, ProjectsComponent, HeroComponent, CarouselComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [TcrappService, Title],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
