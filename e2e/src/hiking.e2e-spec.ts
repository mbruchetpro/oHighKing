import { HttpClient } from '@angular/common/http';

import { browser, ExpectedConditions, WebElement, protractor } from 'protractor';
import { HikingTestPage } from './hiking.po';

describe('Hiking', () => {
  let page: HikingTestPage;

  beforeEach(() => {
    browser.driver.manage().window().setPosition(0,0);
    browser.driver.manage().window().setSize(200,1000);
    browser.waitForAngularEnabled(false);

    page = new HikingTestPage();
    page.navigateTo();

    // to pass the login...
    page.getInputUsername().sendKeys('login');
    page.getInputPassword().sendKeys('password');
    page.getSubmit().click();

    // go to detail...
    browser.sleep(1000);
    page.getCard().click();

    // go to hike in progress
    page.getStart().click();
    browser.sleep(5000);
  });

  it('Démarrage du chronomètre', async () => {
    const oldTime = await page.getTimer().getText();
    browser.sleep(5000);
    const newTime = await page.getTimer().getText();
    browser.sleep(5000);
    expect(newTime).not.toEqual(oldTime);
  });

  it('Démarrage de la géolocalisation', () => {
    browser.wait(page.getGeocalisation(), 60 * 1000, "Attente de la géocalisation");
    expect(page.getGeocalisation().get(0).isDisplayed()).toBe(true);
    browser.sleep(5000);
    const oldPos = page.getPositionUser().get(0).getText();
    browser.sleep(5000);
    expect(oldPos).toEqual(page.getPositionUser().get(0).getText());
  });

  it('L’utilisateur termine manuellement la randonnée', async () => {
    await page.getStop().click();
    browser.sleep(6000);
    expect(page.getEndMsg().get(0).getText()).toEqual("The hicking is done.");
  });
});
