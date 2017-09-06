import { Component, OnInit } from '@angular/core';
import {AdminService} from '../Services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  signInForm={
    Email:'',
    Password:''
  }
  constructor( public adminSer:AdminService) { }
  signIn(){
    this.adminSer.SignIn(this.signInForm);
  }

  ngOnInit() {
  }

}
