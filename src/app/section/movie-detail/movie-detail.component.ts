import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../../shared';

@Component({
  selector: 'pstr-movie-detail',
  templateUrl: 'movie-detail.component.html',
  styleUrls: ['movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(private state: AppStateService) {}

  ngOnInit() {
    this.state.setFalse();
  }

  ngOnDestroy() {
    this.state.setTrue();
  }

}
