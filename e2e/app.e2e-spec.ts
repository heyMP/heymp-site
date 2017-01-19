import { HeympSitePage } from './app.po';

describe('heymp-site App', function() {
  let page: HeympSitePage;

  beforeEach(() => {
    page = new HeympSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
