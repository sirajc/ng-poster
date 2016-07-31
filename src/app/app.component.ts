import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Modal, BS_MODAL_PROVIDERS } from 'angular2-modal/plugins/bootstrap';
import { AppStateService } from './shared';

@Component({
  selector: 'pstr-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  directives: [ ROUTER_DIRECTIVES ],
  encapsulation: ViewEncapsulation.None,
  providers: [ AppStateService ],
  viewProviders: [ ...BS_MODAL_PROVIDERS ]
})
export class AppComponent {
  constructor(private modal: Modal, viewContainerRef: ViewContainerRef) {
    modal.defaultViewContainer = viewContainerRef;
  }
}
