import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { JumbotronComponent } from './jumbotron';


@Component({
  moduleId: module.id,
  selector: 'pstr-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ FooterComponent, HeaderComponent, JumbotronComponent, ROUTER_DIRECTIVES ]
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
