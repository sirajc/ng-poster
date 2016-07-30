import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { JumbotronComponent } from './jumbotron';
import { MovieService } from '../section/shared';


@Component({
  selector: 'pstr-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  directives: [ FooterComponent, HeaderComponent, JumbotronComponent, ROUTER_DIRECTIVES ],
  providers: [ MovieService ]
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
