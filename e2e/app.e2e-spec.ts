import { AngularTestLanguageServicePage } from './app.po';

describe('angular-test-language-service App', () => {
  let page: AngularTestLanguageServicePage;

  beforeEach(() => {
    page = new AngularTestLanguageServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
