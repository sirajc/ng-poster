import { provideRouter, RouterConfig, Route } from '@angular/router';
import { HomeComponent } from './home';

export const APP_ROUTES: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];
