import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie-model';
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

  @Input() movie: Movie;
  constructor() {}

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

}
