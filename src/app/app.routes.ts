import { provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { provideRouter, RouterConfig, Route, ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent } from './home';
import { TopRatedComponent } from './section/top-rated';
import { UpcomingComponent } from './section/upcoming';
import { WatchlistComponent } from './section/watchlist';
import { SearchResultComponent } from './section/search-result';
import { MovieDetailComponent } from './section/movie-detail';

export const APP_ROUTES: RouterConfig = [
  {
    path: '',
    component: HomeComponent,
    children : [
      { path: '', pathMatch: 'full' },
      { path: 'top_rated', component: TopRatedComponent },
      { path: 'upcoming', component: UpcomingComponent },
      { path: 'watchlist', component: WatchlistComponent },
      { path: 'search', component: SearchResultComponent },
      { path: 'movie/:id', component: MovieDetailComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES),
  provide(PLATFORM_DIRECTIVES, {'useValue': ROUTER_DIRECTIVES, multi: true})
];
