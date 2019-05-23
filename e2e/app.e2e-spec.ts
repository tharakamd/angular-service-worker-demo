import {ServiceWorkerDemoPage} from './app.po';

describe('service-worker-demo App', () => {
  let page: ServiceWorkerDemoPage;

  beforeEach(() => {
    page = new ServiceWorkerDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
