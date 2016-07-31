import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import { AppStateService } from '../../shared';
import { MovieDetail, MovieService } from '../shared';
import { FullPosterComponent, FullPosterData } from '../shared/full-poster';

@Component({
  selector: 'pstr-movie-detail',
  templateUrl: 'movie-detail.component.html',
  styleUrls: ['movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  noPosterImage = "assets/images/no_poster.png";
  noProfileImage = "assets/images/no_profile.png";
  personPermaLink = "https://www.themoviedb.org/person/";
  loading = true;
  private sub: any;

  credits: any;
  crewPermaLink: string;
  movie: MovieDetail;
  releaseDate: Date;

  constructor(private state: AppStateService,
                private movieService: MovieService,
                private route: ActivatedRoute,
                private modal: Modal) {
  }

  ngOnInit() {
    this.state.setFalse();

    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.movieService.getMovieDetail(id)
        .subscribe(movie => {
          this.movie = movie;
          this.loading = false;
          this.releaseDate = new Date(this.movie.release_date);
          this.crewPermaLink = `https://www.themoviedb.org/movie/${this.movie.id}/cast`;
          const { credits } = this.movie;
          this.credits = credits;
        })
    })
  }

  ngOnDestroy() {
    this.state.setTrue();
    this.sub.unsubscribe();
  }

  openModal() {
    this.modal.open(FullPosterComponent, new FullPosterData(this.movie.poster_path.medium));
  }

}
