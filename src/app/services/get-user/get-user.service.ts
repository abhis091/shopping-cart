import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from 'src/app/classFiles/loginUser';
import { User } from 'src/app/classFiles/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  loggedIn = false;

  constructor(private _http:HttpClient) { }

  getUserDetails(_userCreds:LoginUser){
    return this._http.get<User[]>(environment.usersUrl);
  }
}
