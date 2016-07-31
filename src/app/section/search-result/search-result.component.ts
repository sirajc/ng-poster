import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieCardListComponent } from '../shared/movie-card-list';
import { Movie, MovieService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'pstr-search-result',
  templateUrl: 'search-result.component.html',
  styleUrls: ['search-result.component.scss'],
  directives: [ MovieCardListComponent ]
})
export class SearchResultComponent implements OnInit {

  movies: Movie[];
  loading = true;
  searchText: string;
  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit() {
    this.router.routerState.queryParams
      .map(queryParams => queryParams['movie'])
      .subscribe(searchText => {
        this.searchText = searchText;
        this.loading = true;
        this.movieService.searchMovies(searchText)
          .subscribe(movies => {
            this.movies = movies;
            this.loading = false; // Can be handled in a better way with router-resolve, post RC5
          });
      });
  }
}
