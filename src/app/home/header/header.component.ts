import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'pstr-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class HeaderComponent implements OnInit {

  isCollapsed = true;

  constructor() {}

  ngOnInit() {
  }

}
