import { browser, by, element } from 'protractor';

export class HomeTestPage {
  navigateTo() {
    return browser.get('/home');
  }
  getAllTitle() {
    return element.all(by.css('.titleHiking'));
  }
  getCard() {
    return element.all(by.css('ion-card:nth-child(1) > a'));
  }
  getStart() {
    return element.all(by.css('.Start'));
  }
  getVoir() {
    return element.all(by.css('div:nth-child(3) > .see'));
  }
  // To pass the login...
  getInputUsername() {
    return element.all(by.css('.input-username > .native-input'));
  }
  getInputPassword() {
    return element.all(by.css('.input-password > .native-input'));
  }
  getSubmit() {
    return element.all(by.css('.button-submit'));
  }
  getError() {
    return element.all(by.css('#span-error'));
  }
}
