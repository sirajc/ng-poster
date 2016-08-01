/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';

describe('Component: MovieDetail', () => {
  it('should create an instance', () => {
    let component = new MovieDetailComponent(null, null, null, null);
    expect(component).toBeTruthy();
  });
});
