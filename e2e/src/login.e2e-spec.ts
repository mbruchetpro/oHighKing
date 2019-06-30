
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../src/app/services/login.service';
import { LoginTestPage } from './login.po';
import { browser, ExpectedConditions } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Login', () => {
  let page: LoginTestPage;

  beforeEach(() => {
    page = new LoginTestPage();
    page.navigateTo();

    browser.waitForAngularEnabled(false);

  });

  it('L\'utilisateur se connecte avec de bons identifiant', async () => {
    await page.getInputUsername().sendKeys('login');
    await page.getInputPassword().sendKeys('password');
    browser.sleep(5000);
    await page.getSubmit().click();
    browser.sleep(5000);
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/home');
  });
  
  it('L’utilisateur se connecte avec de mauvais identifiants', async () => {    
    await page.getInputUsername().sendKeys('loginne');
    await page.getInputPassword().sendKeys('passwordsss');
    browser.sleep(5000);
    await page.getSubmit().click();
    browser.sleep(5000);
    expect(page.getError().getText()).toContain('Mauvaise combinaison de login et de mot de passe');
  });
});
