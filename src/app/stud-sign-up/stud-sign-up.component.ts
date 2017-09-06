import { Component, OnInit } from '@angular/core';
import {StudentService} from '../Services/student.service';

@Component({
  selector: 'app-stud-sign-up',
  templateUrl: './stud-sign-up.component.html',
  styleUrls: ['./stud-sign-up.component.css']
})
export class StudSignUpComponent implements OnInit {
  signUpForm={
    Email: "",
    Password: "",
    user: "student"
  }
  constructor(private studService:StudentService) { }

  ngOnInit() {
  }
  signUp(){
    this.studService.signUp(this.signUpForm);
  }

}
