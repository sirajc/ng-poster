/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';

describe('Component: MovieCard', () => {
  it('should create an instance', () => {
    let component = new MovieCardComponent(null);
    expect(component).toBeTruthy();
  });
});
