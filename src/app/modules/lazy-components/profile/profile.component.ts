import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classFiles/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails:any;
  constructor() { } 

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails')!);
  }

}
