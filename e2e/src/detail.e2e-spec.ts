import { HttpClient } from '@angular/common/http';

import { browser} from 'protractor';
import { DetailTestPage } from './detail.po';

describe('Détail', () => {
  let page: DetailTestPage;

  beforeEach(() => {
    browser.driver.manage().window().setPosition(0,0);
    browser.driver.manage().window().setSize(200,1000);
    browser.waitForAngularEnabled(false);

    page = new DetailTestPage();
    page.navigateTo();

    // to pass the login...
    page.getInputUsername().sendKeys('login');
    page.getInputPassword().sendKeys('password');
    browser.sleep(1000);
    page.getSubmit().click();

    // go to detail...
    browser.sleep(1000);
    page.getCard().click();
  });

  it('Affichage des randonnées', () => {
    browser.sleep(5000);
    expect(page.getTitle().get(0).getText()).toEqual('Puy de dôme');
    expect(page.getTime().get(0).getText()).toEqual('4 : 35');
    expect(page.getAddress().get(0).getText()).toEqual('lore');
  });

  it('Démarrage de la randonnée', async () => {
    await page.getStart().click();
    browser.sleep(5000);
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/hiking/ldejfoej');
  });

});
