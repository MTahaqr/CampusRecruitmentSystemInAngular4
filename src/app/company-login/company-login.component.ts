import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../Services/company.service';


@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent implements OnInit {

 signInForm={
    Email: "",
    Password: ""
  }

  constructor(private comService:CompanyService) { }

  ngOnInit() {
  }
  SignIn(){
    this.comService.SignIn(this.signInForm);
  }
  LogOut(){
    this.comService.LogOut();
  }

}
