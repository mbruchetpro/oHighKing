import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.definitions';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private users : IUser[];
  private currentUser: IUser;

  constructor(private http: HttpClient) { }

  getUsers() : Observable<IUser[]> {
    // console.log(this.users);
    return this.http.get<IUser[]>('assets/data/user.json', {responseType: 'json'});    
  }

  checkUser() : Observable<IUser> {
    console.log("Wesh")
    this.currentUser = JSON.parse(localStorage.getItem("ohighking_currentuser")); 
    console.log("ifezije") 
    return of(this.currentUser);
  }
}