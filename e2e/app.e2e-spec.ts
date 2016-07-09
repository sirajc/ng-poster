import { NgPosterPage } from './app.po';

describe('ng-poster App', function() {
  let page: NgPosterPage;

  beforeEach(() => {
    page = new NgPosterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pstr works!');
  });
});
