import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pstr-action-button',
  templateUrl: 'action-button.component.html',
  styleUrls: ['action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  @Input() type: string = 'added';
  @Input() actionHint: string;
  glyphMap = {
    add: 'plus',
    remove: 'remove',
    added: 'ok'
  };

  constructor() { }

  ngOnInit() {

  }

  getGlyphClass() {
    return `glyphicon glyphicon-${this.glyphMap[this.type]}`
  }

}
