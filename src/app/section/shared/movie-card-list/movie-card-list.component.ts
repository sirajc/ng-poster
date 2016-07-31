import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie-model';
import { MovieCardComponent } from '../movie-card';

@Component({
  moduleId: module.id,
  selector: 'pstr-movie-card-list',
  templateUrl: 'movie-card-list.component.html',
  styleUrls: ['movie-card-list.component.scss'],
  directives: [ MovieCardComponent ]
})
export class MovieCardListComponent implements OnInit {

  @Input() movies: Movie[];
  @Input() canRemoveFromWatchList: boolean = false;
  constructor() {}

  ngOnInit() {
  }

  onMovieRemoved(movieId : number) {
    this.movies = this.movies.filter( movie => movie.id !== movieId);
  }
}
