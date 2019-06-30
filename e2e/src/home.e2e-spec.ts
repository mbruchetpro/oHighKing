import { HttpClient } from '@angular/common/http';

import { browser } from 'protractor';
import { HomeTestPage } from './home.po';

describe('Home', () => {
  let page: HomeTestPage;

  beforeEach(() => {
    browser.driver.manage().window().setPosition(0,0);
    browser.driver.manage().window().setSize(200,1000);
    browser.waitForAngularEnabled(false);

    page = new HomeTestPage();
    page.navigateTo();

    // to pass the login...
    page.getInputUsername().sendKeys('login');
    page.getInputPassword().sendKeys('password');
    page.getSubmit().click();

  });

  it('Affichage des randonnées', () => {
    expect(page.getAllTitle()).not.toBeNull();
  });

  it('Navigation vers la page détail', async () => {
    await page.getCard().click();
    browser.sleep(6000);
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/detail/ldejfoej');
  });

  it('Affichage des données de la randonnée en cours', async () => {    
    await page.getCard().click();
    await page.getStart().click();
    browser.sleep(6000);
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/hiking/ldejfoej');
  });

});
