import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GetUserService } from './services/get-user/get-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private _guService:GetUserService
  ) {}

  canActivate(){
    if(this._guService.loggedIn){
      return true;
    }
    return false;    
  }
  
}
