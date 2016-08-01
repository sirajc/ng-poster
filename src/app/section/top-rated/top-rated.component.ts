import { Component, OnInit } from '@angular/core';
import { MovieCardListComponent } from '../shared/movie-card-list';
import { LoadMovieType, Movie, MovieService } from '../shared';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator';

@Component({
  moduleId: module.id,
  selector: 'pstr-top-rated',
  templateUrl: 'top-rated.component.html',
  styleUrls: ['top-rated.component.scss'],
  directives: [ MovieCardListComponent, LoadingIndicatorComponent ]
})
export class TopRatedComponent implements OnInit {

  movies: Movie[];
  loading = true;
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.loadMovies(LoadMovieType.TOP_RATED)
      .subscribe(movies => {
        this.movies = movies;
        this.loading = false; // Can be handled in a better way with router-resolve, post RC5
      }, error, complete);
  }
}

const complete = () => { console.log('Obeservable complete')};
const error = (error) => console.log('Error fetching movies', error);