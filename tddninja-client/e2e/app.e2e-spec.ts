import { TddninjaClientPage } from './app.po';

describe('tddninja-client App', () => {
  let page: TddninjaClientPage;

  beforeEach(() => {
    page = new TddninjaClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
