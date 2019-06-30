import { browser, by, element } from 'protractor';

export class DetailTestPage {
  navigateTo() {
    return browser.get('/home');
  }
  getCard() {
    return element.all(by.css('ion-card:nth-child(1) > a'));
  }
  getTitle() {
    return element.all(by.css('.card-title'))
  }
  getTime() {
    return element.all(by.css('.time'))
  }
  getAddress() {
    return element.all(by.css('.address'))
  }

  getStart() {
    return element.all(by.css('.Start'));
  }
  getVoir() {
    return element.all(by.css('.see'));
  }
  getTimer() {
    return element.all(by.css('.timer'));
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
