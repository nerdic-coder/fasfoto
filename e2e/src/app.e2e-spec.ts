import { AppPage } from './app.po';
import { element, by, browser } from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/home');
    });
    it('should have a title saying Home', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('Hem');
        expect(element(by.css('ion-img[src="assets/profile.jpg"]')).isPresent()).toBeTruthy(['ion-img[src="assets/profile.jpg"]']);


      });
    });

    it('test', () => {

      browser.driver.manage().window().setSize(1920, 1040);
      element(by.css('ion-menu-toggle:nth-of-type(2)>ion-item>ion-label')).click();
      element(by.css('ion-menu-toggle:nth-of-type(3)>ion-item>ion-label')).click();

    });

    it('test 2', () => {

      element(by.css('ion-item[ng-reflect-router-link="/store"]')).click();
      element(by.css('ion-item[ng-reflect-router-link="/social"]>ion-label')).click();

    });

    it('test 3', () => {
      browser.driver.manage().window().setSize(1920, 1040);
      element(by.css('ion-item[ng-reflect-router-link="/videos"]>ion-label')).click();
      expect(element(by.css('app-videos>ion-header>ion-toolbar>ion-title')).getText()).toContain(['Videor']);
      element(by.css('ion-item[ng-reflect-router-link="/store"]>ion-label')).click();
      expect(element(by.css('app-store>ion-header>ion-toolbar>ion-title')).getText()).toContain(['Butik']);
      element(by.css('ion-item[ng-reflect-router-link="/books"]>ion-label')).click();
    });

    it('test mobile', () => {
      browser.driver.manage().window().setSize(375, 812);
      expect(element(by.css('ion-img[src="assets/profile.jpg"]')).isPresent()).toBeTruthy(['ion-img[src="assets/profile.jpg"]']);
      element(by.css('ion-menu-button')).click();
      element(by.css('ion-item[ng-reflect-router-link="/pictures"]>ion-label')).click();
      expect(element(
        by.css('img[src="https://cdn5.eyeem.com/thumb/9a24d562a8916b3f647979c2d90f2e738ccc9a51-1569511742724/1100/1100"]')).isPresent())
        .toBeTruthy(['img[src="https://cdn5.eyeem.com/thumb/9a24d562a8916b3f647979c2d90f2e738ccc9a51-1569511742724/1100/1100"]']);
      element(by.css('ion-menu-button')).click();
      element(by.css('ion-item[ng-reflect-router-link="/videos"]')).click();
      element(by.css('ion-menu-button')).click();
      element(by.css('ion-item[ng-reflect-router-link="/store"]>ion-label')).click();
      expect(element(by.css('app-store>ion-header>ion-toolbar>ion-title')).getText()).toContain(['Butik']);
      expect(element(by.css('img[src="assets/aland-shirt.jpg"]')).isPresent()).toBeTruthy(['img[src="assets/aland-shirt.jpg"]']);
      expect(element(by.css('ion-menu-button')).getText()).toContain(['Butik']);
      expect(element(by.css('ion-item[ng-reflect-router-link="/books"]>ion-label')).getText()).toContain(['Butik']);
      expect(element(by.css('ion-img[src="assets/book-cover.jpg"]')).isPresent()).toBeTruthy(['ion-img[src="assets/book-cover.jpg"]']);
    });
  });
});
