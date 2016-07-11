import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'pstr-jumbotron',
  templateUrl: 'jumbotron.component.html',
  styleUrls: ['jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor(private rotuer: Router) {}

  ngOnInit() {
  }

  search(searchText) {
    this.rotuer.navigate(['/search'], { queryParams: { query: searchText } })
  }

}
