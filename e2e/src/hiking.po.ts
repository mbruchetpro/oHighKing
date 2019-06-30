import { browser, by, element } from 'protractor';

export class HikingTestPage {
  navigateTo() {
    return browser.get('/home');
  }

  getTimer() {
    return element.all(by.css('.timerInProgress'));
  }

  getPositionUser() {
    return element.all(by.css('.position'));
  }

  getGeocalisation() {
    return element.all(by.css('.hike'));
  }
  getStop() {
    return element.all(by.css('.Stop'));
  }
  getEndMsg() {
    return element.all(by.css('.endText'));
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
