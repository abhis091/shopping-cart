import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classFiles/user';
import { GetUserService } from 'src/app/services/get-user/get-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username= '';

  constructor(private _guService:GetUserService) { }

  ngOnInit(): void {}

  logout(){
    localStorage.removeItem('userDetails');
    this._guService.loggedIn = false;
  }

  isLoggedIn(){
    if(this._guService.loggedIn){
      let user = localStorage.getItem('userDetails');
      if(user){
        let userData:User = JSON.parse(user);
        this.username = userData.name.firstname +" "+ userData.name.lastname; 
      }
      return true;
    }
    return false;
  }

}
