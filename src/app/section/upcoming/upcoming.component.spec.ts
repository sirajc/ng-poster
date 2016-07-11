/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { UpcomingComponent } from './upcoming.component';

describe('Component: Upcoming', () => {
  it('should create an instance', () => {
    let component = new UpcomingComponent();
    expect(component).toBeTruthy();
  });
});
