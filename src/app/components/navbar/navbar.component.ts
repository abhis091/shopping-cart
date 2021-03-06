import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classFiles/user';
import { GetUserService } from 'src/app/services/get-user/get-user.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username= '';
  _i:number =0;

  constructor(private _lService:LoginService, private _router:Router) { }

  ngOnInit(): void {}

  logout(){
    localStorage.removeItem('userDetails');
    this._router.navigate(['/home']);
  }

  isAdmin(){
    return this._lService.isAdmin();
  }

  isLoggedIn(){
    let userData=this._lService.isLoggedIn();
    if(userData){
      this.username = userData.name.firstname +" "+ userData.name.lastname; 
      return true;
    }
    return false;
  }

}
