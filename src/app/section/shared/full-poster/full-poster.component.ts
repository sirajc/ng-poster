import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class FullPosterData extends BSModalContext {
    constructor(public url: string) {
        super();
        this.isBlocking = false;
        this.dialogClass = 'poster-dialog';
    }
}

@Component({
  selector: 'pstr-full-poster',
  templateUrl: 'full-poster.component.html',
  styleUrls: ['full-poster.component.scss']
})
export class FullPosterComponent implements OnInit, ModalComponent<FullPosterData> {
  context: FullPosterData;
  constructor(public dialog: DialogRef<FullPosterData>) {
    this.context = dialog.context;
  }

  ngOnInit() {
  }

  close() {
    this.dialog.close();
  }

}
