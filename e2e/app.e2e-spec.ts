import { NgCliWebpackPage } from './app.po';

describe('ng-cli-webpack App', function() {
  let page: NgCliWebpackPage;

  beforeEach(() => {
    page = new NgCliWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
