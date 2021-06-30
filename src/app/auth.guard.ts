import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GetUserService } from './services/get-user/get-user.service';
import { LoginService } from './services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private _lService: LoginService
    ) {}

  canActivate(){
    if(this._lService.isLoggedIn()){
      return true;
    }
    return false;    
  }
  
}
