import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService,  AppStateSubject } from '../../shared';

@Component({
  selector: 'pstr-jumbotron',
  templateUrl: 'jumbotron.component.html',
  styleUrls: ['jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  behavior: AppStateSubject;
  constructor(private rotuer: Router, private state: AppStateService) {}

  ngOnInit() {
    this.behavior = this.state.getAppState();
  }

  search(searchText) {
    this.rotuer.navigate(['/search'], { queryParams: { query: searchText } })
  }

}
