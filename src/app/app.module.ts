import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { Routing } from './app.router';

import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/Database';
import * as firebase from 'firebase/app';
 
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import {MdButtonModule, MdToolbarModule, MdInputModule, MdDatepickerModule, MdNativeDateModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
// import {FormControl, Validators} from '@angular/forms';
import 'hammerjs';

import {StudentService} from './Services/student.service';
import {CompanyService} from './Services/company.service';
import {AdminService} from './Services/admin.service'
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudSignUpComponent } from './stud-sign-up/stud-sign-up.component';
import { CompanySignUpComponent } from './company-sign-up/company-sign-up.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { PostJobsComponent } from './post-jobs/post-jobs.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { AllStudComponent } from './all-stud/all-stud.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { MainComponent } from './main/main.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CurComJobComponent } from './cur-com-job/cur-com-job.component';
import { AllComComponent } from './all-com/all-com.component';
import { ApStudentsComponent } from './ap-students/ap-students.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
var config = {
    apiKey: "AIzaSyCs093DhpKYQxmnlTJ-g7YxVG5GGkxtUyA",
    authDomain: "campusrecruitmentsystem-3ba8a.firebaseapp.com",
    databaseURL: "https://campusrecruitmentsystem-3ba8a.firebaseio.com",
    projectId: "campusrecruitmentsystem-3ba8a",
    storageBucket: "campusrecruitmentsystem-3ba8a.appspot.com",
    messagingSenderId: "775721935895"
  };

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    StudentLoginComponent,
    CompanyLoginComponent,
    StudentDashboardComponent,
    StudSignUpComponent,
    CompanySignUpComponent,
    CompanyDashboardComponent,
    PostJobsComponent,
    EditDetailsComponent,
    AllJobsComponent,
    AllStudComponent,
    AdminSignUpComponent,
    MainComponent,
    AdminDashboardComponent,
    CurComJobComponent,
    AllComComponent,
    ApStudentsComponent,
    
    
     
    // MaterialModule.forRoot(),
    // MaterialModule,
    //  BrowserAnimationsModule,
    // MdButtonModule,
    // MdToolbarModule
   
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
    // MaterialModule.
    MaterialModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdInputModule,
    MdDatepickerModule,
    NgbModule.forRoot(),
    // FormControl, 
    // Validators,

    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule, 
   
   
  ],
   bootstrap: [AppComponent],
  providers: [
    StudentService,
    CompanyService,
    AdminService,
    MdDatepickerModule,
    CurComJobComponent,
  ],
})
export class AppModule { }
