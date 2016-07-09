export class NgPosterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pstr-root h1')).getText();
  }
}
