import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from 'src/app/classFiles/loginUser';
import { User } from 'src/app/classFiles/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }

  login(_userCreds:LoginUser){    
    return this._http.post<any>(environment.loginUrl,_userCreds);
  }
}
