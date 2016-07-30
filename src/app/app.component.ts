import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AppStateService } from './shared';

@Component({
  selector: 'pstr-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  directives: [ ROUTER_DIRECTIVES ],
  encapsulation: ViewEncapsulation.None,
  providers: [ AppStateService ]
})
export class AppComponent {

}
