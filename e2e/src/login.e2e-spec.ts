
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../src/app/services/login.service';
import { LoginTestPage } from './login.po';
import { element } from '@angular/core/src/render3';
import { browser, ExpectedConditions } from 'protractor';

describe('Login', () => {
  let page: LoginTestPage;

  beforeEach(() => {
    page = new LoginTestPage();
    page.navigateTo();
  });


  it('L\'utilisateur se connecte avec de bons identifiant', () => {
    page.getInputUsername().click();
    page.getInputUsername().sendKeys('login');

    page.getInputPassword().click();
    page.getInputPassword().sendKeys('password');

    page.getSubmit().click();


    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/home');
  });
});
