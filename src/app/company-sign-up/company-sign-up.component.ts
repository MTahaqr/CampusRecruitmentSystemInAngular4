import { Component, OnInit } from '@angular/core';
import{CompanyService} from '../Services/company.service';

@Component({
  selector: 'app-company-sign-up',
  templateUrl: './company-sign-up.component.html',
  styleUrls: ['./company-sign-up.component.css']
})
export class CompanySignUpComponent implements OnInit {
  signUpForm={
    Name:'',
    Email: "",
    Password: "",
    user:"company"
  }
  constructor(private comService:CompanyService) { }

  ngOnInit() {
  }
  SignUp(){
    this.comService.signUp(this.signUpForm);
  }

}
