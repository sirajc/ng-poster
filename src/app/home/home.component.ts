import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';


@Component({
  moduleId: module.id,
  selector: 'pstr-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ FooterComponent, HeaderComponent ]
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
