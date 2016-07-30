import { Component, OnInit } from '@angular/core';
import { MovieCardListComponent } from '../shared/movie-card-list';
import { Movie } from '../shared';

@Component({
  selector: 'pstr-watchlist',
  templateUrl: 'watchlist.component.html',
  styleUrls: ['watchlist.component.scss'],
  directives: [ MovieCardListComponent ]
})
export class WatchlistComponent implements OnInit {

  movies: Array<Movie> = [];
  constructor() {}

  ngOnInit() {
    movieList.map(movie => this.movies.push(movie));
  }
}

const movieList = [
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//dbZjnscVCRyEqONqLCpuJpMs9EK.jpg",
        "small": "https://image.tmdb.org/t/p/w185//dbZjnscVCRyEqONqLCpuJpMs9EK.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//dbZjnscVCRyEqONqLCpuJpMs9EK.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//dbZjnscVCRyEqONqLCpuJpMs9EK.jpg"
      },
      "adult": false,
      "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
      "release_date": "2016-08-03",
      "genre_ids": [
        28,
        878,
        80
      ],
      "id": 297761,
      "original_title": "Suicide Squad",
      "original_language": "en",
      "title": "Suicide Squad",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//5wD7Z5xqbXvWzM9odFYQsAnNTqM.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//5wD7Z5xqbXvWzM9odFYQsAnNTqM.jpg",
        "original": "https://image.tmdb.org/t/p/original//5wD7Z5xqbXvWzM9odFYQsAnNTqM.jpg"
      },
      "popularity": 4.618994,
      "vote_count": 18,
      "video": false,
      "vote_average": 6.97,
      "watchlist": true,
      "_id": "fnzKN6JwWW3cOaIc",
      "createdAt": "2016-07-09T10:43:41.562Z",
      "updatedAt": "2016-07-09T10:43:41.562Z"
    }
  ];