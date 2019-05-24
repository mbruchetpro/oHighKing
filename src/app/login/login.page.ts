import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from '../models/user.definitions';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private username: string;
  private password: string;
  private users: IUser[];

  constructor(private http: HTTP) { 
    this.username = "";
    this.password = "";
  }

  _handleLogin(login: NgForm) {
    console.info("🚨 Attention un login !!");

    // username
    console.info(login.value.username);
    this.username = login.value.username;
    // password 
    console.info(login.value.password);
    this.password = login.value.password;

    // TODO: Log in the user with the base !
    this.http.sendRequest('http://ionic.io', {"method": "post"})
    .then(response => {
      console.log("🚨Data then");
      console.log(response.data);
    })
    .catch(error => {
      console.log("🚨Data catch");
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
