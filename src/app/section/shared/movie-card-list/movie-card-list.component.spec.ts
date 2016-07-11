/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MovieCardListComponent } from './movie-card-list.component';

describe('Component: MovieCardList', () => {
  it('should create an instance', () => {
    let component = new MovieCardListComponent();
    expect(component).toBeTruthy();
  });
});
