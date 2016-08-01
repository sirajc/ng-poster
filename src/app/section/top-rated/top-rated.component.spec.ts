/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TopRatedComponent } from './top-rated.component';

describe('Component: TopRated', () => {
  it('should create an instance', () => {
    let component = new TopRatedComponent(null);
    expect(component).toBeTruthy();
  });
});
