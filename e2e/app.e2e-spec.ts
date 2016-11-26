import { Ang2SeedsPage } from './app.po';

describe('ang2-seeds App', function() {
  let page: Ang2SeedsPage;

  beforeEach(() => {
    page = new Ang2SeedsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
