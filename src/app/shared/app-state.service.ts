import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class AppState {

  constructor() {

  }

  public showJumbotron: boolean = true;
}

export class AppStateSubject extends BehaviorSubject<AppState> {
  constructor(value: AppState) {
    super(value);
  }

  public next(value: AppState) {
    this._next(value);
  }
}

@Injectable()
export class AppStateService {
  private appStateSubject: AppStateSubject;
  private appState: AppState;
  constructor() {
    this.appStateSubject = new AppStateSubject(new AppState());
    this.appState = this.appStateSubject.getValue();
  }

  getAppState() {
    return this.appStateSubject;
  }

  setTrue() {
    this.appState.showJumbotron = true;
    this.appStateSubject.next(this.appState);
  }

  setFalse() {
    this.appState.showJumbotron = false;
    this.appStateSubject.next(this.appState);
  }
}