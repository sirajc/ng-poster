import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../movie-model';
import { MovieService } from '../movie-service';
import { ActionButtonComponent } from '../action-button';

@Component({
  moduleId: module.id,
  selector: 'pstr-movie-card',
  templateUrl: 'movie-card.component.html',
  styleUrls: ['movie-card.component.scss'],
  directives: [ ActionButtonComponent ]
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;
  @Input() canRemoveFromWatchList: boolean = false;

  @Output() movieRemoved: EventEmitter<number> = new EventEmitter<number>();

  private noPosterImage = "assets/images/no_poster.png";
  private action: string;
  private releaseDate: Date;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.releaseDate = new Date(this.movie.release_date);

    if (this.movie.watchlist === true) {
      this.action = this.canRemoveFromWatchList ? 'remove' : 'added';
    } else {
      this.action = 'add';
    }
  }

  onAction(actionType: string) {
    switch (actionType) {
      case 'add':
        this.movieService.addToWatchList(this.movie)
          .subscribe(() => {
            this.action = 'added';
          }, error, complete);
        break;
      case 'remove':
        this.movieService.removeFromWatchList(this.movie.id)
          .subscribe(response => {
            if (response.moviesRemoved === 1) {
              this.movieRemoved.emit(this.movie.id);
            }
          }, error, complete);
        break;
    }
  }

  public get actionHint() {
    switch (this.action) {
      case 'add':
        return 'Add to watchlist'
      case 'remove':
        return 'Remove from watchlist'
      case 'added':
        return 'Added to watchlist'
    }
  }

  public get titleLength(): number {
    return this.movie.title.length;
  }

  public get truncatedTitle(): string {
    return (this.titleLength > 33) ? this.movie.title.substr(0, 28) + '...' : this.movie.title;
  }

}

const complete = () => { console.log('Obeservable complete') };
const error = (error) => console.log('Error fetching movies', error);
