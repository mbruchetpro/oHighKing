import { browser, by, element } from 'protractor';

export class LoginTestPage {
  navigateTo() {
    return browser.get('/');
  }

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
