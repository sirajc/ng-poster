import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pstr-search-box',
  templateUrl: 'search-box.component.html',
  styleUrls: ['search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  onSearch(searchText: string) {
    if(searchText.length > 0) {
      this.search.emit(searchText);
    }
  }

}
