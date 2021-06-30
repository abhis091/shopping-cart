import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/classFiles/loginUser';
import { GetUserService } from 'src/app/services/get-user/get-user.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCreds= new LoginUser('','');
  success = true;
  token = null;

  constructor(
    private _lService: LoginService,
    private _guService:GetUserService,
    private _router:Router
  ) {}

  ngOnInit(): void {}

  onLoginClicked(){
    this._lService.login(this.userCreds)
        .subscribe(data => {
            this.token = data.token;
            if(this.token){
              this.getUserData();
              return;
            }
      this.success = false;
    });
  }

  getUserData(){
    this._guService.getUserDetails(this.userCreds)
        .subscribe(userData => {
          userData.forEach(user =>{
            if(user.username == this.userCreds.username){
              localStorage.setItem("userDetails",JSON.stringify(user));
              this._router.navigate(['/home']);
            }
          });
        });
  }

}
