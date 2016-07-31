import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService,  AppStateSubject } from '../../shared';

@Component({
  selector: 'pstr-jumbotron',
  templateUrl: 'jumbotron.component.html',
  styleUrls: ['jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  state: AppStateSubject;
  constructor(private rotuer: Router, private stateService: AppStateService) {}

  ngOnInit() {
    this.state = this.stateService.getAppState();
  }

  search(searchText: string) {
    if(searchText.length > 0)
      this.rotuer.navigate(['/search'], { queryParams: { movie: searchText } })
  }
}
