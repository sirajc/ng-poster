import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { MODAL_BROWSER_PROVIDERS } from 'angular2-modal/platform-browser';
import { APP_ROUTER_PROVIDERS, AppComponent, environment } from './app';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [ APP_ROUTER_PROVIDERS, HTTP_PROVIDERS, MODAL_BROWSER_PROVIDERS ])
  .catch(err => console.error(err));
