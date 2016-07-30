import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  moduleId: module.id,
  selector: 'pstr-movie-card',
  templateUrl: 'movie-card.component.html',
  styleUrls: ['movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  noPosterImage = "assets/images/no_poster.png";

  @Input() movie: Movie;
  constructor() {}

  ngOnInit() {
  }

}
