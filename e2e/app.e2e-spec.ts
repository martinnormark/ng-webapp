import { WebappNewPage } from './app.po';

describe('webapp-new App', () => {
  let page: WebappNewPage;

  beforeEach(() => {
    page = new WebappNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
