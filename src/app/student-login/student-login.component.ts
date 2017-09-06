import { Component, OnInit} from '@angular/core';
import {MdButtonModule, MdToolbarModule, MdInputModule, MdDatepickerModule, MdNativeDateModule} from '@angular/material';
// import { HostBinding } from '@angular/core';
// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/Database';
import { NgModel } from '@angular/forms';

// import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import {StudentService} from '../Services/student.service';

// import { moveIn } from '../router.animations';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  
  signInForm={
    Email: "",
    Password: ""
  }

  constructor(private afAuth:AngularFireAuth ,private studService:StudentService) {
    
   }
  ngOnInit() {
    // this.studService.isLogIn();
  }
  signUp(){
    this.studService.signUp(this.signInForm);
    this.signInForm={
    Email: "",
    Password: ""
  }
  }
  SignIn(){
    this.studService.SignIn(this.signInForm);
  }
  LogOut(){
    this.studService.LogOut();
  }
 
  

}
