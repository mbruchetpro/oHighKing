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
    return this.http.get<IUser[]>('assets/data/user.json', {responseType: 'json'});    
  }

  checkUser() : Observable<IUser> {
    this.currentUser = JSON.parse(localStorage.getItem("ohighking_currentuser")); 
    return of(this.currentUser);
  }
}