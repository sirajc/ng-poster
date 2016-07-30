/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { JumbotronComponent } from './jumbotron.component';

describe('Component: Jumbotron', () => {
  it('should create an instance', () => {
    let component = new JumbotronComponent(null);
    expect(component).toBeTruthy();
  });
});
