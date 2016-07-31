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

  @Input() canRemoveFromWatchList: boolean = false;
  noPosterImage = "assets/images/no_poster.png";
  action: string;
  actionHint: string;
  @Output() movieRemoved: EventEmitter<number> = new EventEmitter<number>();

  @Input() movie: Movie;
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    if(this.movie.watchlist === true) {
      this.action = this.canRemoveFromWatchList ? 'remove' : 'added';
    } else {
      this.action = 'add';
    }

    switch (this.action) {
      case 'add':
        this.actionHint = 'Add to watchlist'
        break;
      case 'remove':
        this.actionHint = 'Remove from watchlist'
        break;
      case 'added':
        this.actionHint = 'Added to watchlist'
        break;
    }
  }

  onAction(actionType: string) {
    switch (actionType) {
      case 'add':
        this.movieService.addToWatchList(this.movie)
              .subscribe( () => {
                this.action = 'added';
                this.actionHint = 'Added to watchlist';
              }, error, complete);
        break;
      case 'remove':
        this.movieService.removeFromWatchList(this.movie.id)
              .subscribe( response => {
                if(response.moviesRemoved === 1) {
                  this.movieRemoved.emit(this.movie.id);
                }
              }, error, complete);
        break;
    }
  }

}

const complete = () => { console.log('Obeservable complete')};
const error = (error) => console.log('Error fetching movies', error);