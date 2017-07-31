import { Angular03SpotifyPage } from './app.po';

describe('angular03-spotify App', () => {
  let page: Angular03SpotifyPage;

  beforeEach(() => {
    page = new Angular03SpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
