import { GuappPage } from './app.po';

describe('guapp App', function() {
  let page: GuappPage;

  beforeEach(() => {
    page = new GuappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
