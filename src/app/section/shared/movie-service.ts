import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Movie, MovieDetail } from './movie-model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  loadMovies(type: LoadMovieType) {
    return this.http.get(this.getEndPointUrl(type))
                      .map(response => response.json())
                      .map(response => <Movie[]>response.results)
  }

  getMovieDetail(movieId: number) {
    return this.http.get(`${API_URL}/movie/info/${movieId}`)
                      .map(response => <MovieDetail>response.json())
  }

  searchMovies(searchText: string) {
    let options: RequestOptionsArgs = {};
    options.search = `query=${searchText}`;
    return this.http.get(`${API_URL}${END_POINTS.SEARCH}`, options)
                      .map(response => response.json())
                      .map(response => <Movie[]>response.results)
  }

  addToWatchList(movie: Movie) {
    return this.http.put(`${API_URL}${END_POINTS.ADD_MOVIE_WATCHLIST}`, movie)
                      .map(response => response.json());
  }

  removeFromWatchList(movieId: number) {
    return this.http.delete(`${API_URL}${END_POINTS.REMOVE_MOVIE_WATCHLIST}/${movieId}`)
                      .map(response => response.json());
  }

  private getEndPointUrl(type: LoadMovieType): string {
    let endPointType = '';
    switch (type) {
      case LoadMovieType.TOP_RATED:
        endPointType =  'GET_TOP_RATED'
        break;
      case LoadMovieType.UPCOMING:
        endPointType =  'GET_UPCOMING'
        break;
      case LoadMovieType.WATCHLIST:
        endPointType =  'GET_WATCHLIST'
        break;
    }
    return `${API_URL}${END_POINTS[endPointType]}`;
  }


}

export const enum LoadMovieType {
  TOP_RATED,
  UPCOMING,
  WATCHLIST
}

const API_URL = "http://localhost:9000/api";

const END_POINTS = {
    GET_TOP_RATED:          '/movie/top_rated',
    GET_UPCOMING:           '/movie/upcoming',
    SEARCH:                 '/movie/search',
    GET_WATCHLIST:          '/watchlist',
    ADD_MOVIE_WATCHLIST:    '/watchlist',
    REMOVE_MOVIE_WATCHLIST: '/watchlist'
};
