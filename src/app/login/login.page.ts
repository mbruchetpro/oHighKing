import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from '../models/user.definitions';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private username: string;
  private password: string;
  private users: IUser[];
  private currentUser: IUser;
  private error: string;

  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) {
    this.username = '';
    this.password = '';
    this.error = '';
  }

  async _handleLogin(login: NgForm) {
    // Value of login :
    this.username = login.value.username;
    this.password = login.value.password;

    // search if the user exists
    this.currentUser = this.users.find(
      (u: IUser) =>  u.username === this.username && u.password === this.password
    );

    if (this.currentUser) {
      localStorage.setItem('ohighking_currentuser', JSON.stringify(this.currentUser));
      this.router.navigate(['/home']);
    } else {
      this.error = 'Mauvaise combinaison de login et de mot de passe';
    }
  }

  ngOnInit() {
    localStorage.removeItem('ohighking_currentuser');
    localStorage.removeItem('ohighking_hiking-in-progress');
    this.loginService.getUsers().subscribe((result: any) => this.users = result.users);
  }

}
