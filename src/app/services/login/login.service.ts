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

  isAdmin(){
    if(this.getUser()?.username == 'johnd'){
      return true;
    }
    return false;
  }

  isLoggedIn():User|undefined{
    return this.getUser();
  }

  getUser(){
    let user = localStorage.getItem('userDetails');
      if(user){    
        let userData:User = JSON.parse(user);
        return userData;
      }
      return undefined;
  }
}
