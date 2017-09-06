import { Component, OnInit } from '@angular/core';
import {AdminService} from '../Services/admin.service'

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css']
})
export class AdminSignUpComponent implements OnInit {

  adminSignUpForm={
    Email: '',
    Password: '',
    user: 'Admin'
  }
  constructor(public adSer: AdminService) { }

  signUp(){
    this.adSer.signUp(this.adminSignUpForm);
  }
  
  ngOnInit() {
  }

}
