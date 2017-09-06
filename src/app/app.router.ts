import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import {StudSignUpComponent} from './stud-sign-up/stud-sign-up.component';
import {CompanySignUpComponent} from './company-sign-up/company-sign-up.component';
import {CompanyDashboardComponent} from './company-dashboard/company-dashboard.component';
import {PostJobsComponent} from './post-jobs/post-jobs.component';
import {EditDetailsComponent} from './edit-details/edit-details.component';
import {AllJobsComponent} from './all-jobs/all-jobs.component';
import {AllStudComponent} from './all-stud/all-stud.component';
import {AdminSignUpComponent} from './admin-sign-up/admin-sign-up.component';
import {MainComponent} from './main/main.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {CurComJobComponent} from './cur-com-job/cur-com-job.component';
import {AllComComponent} from './all-com/all-com.component';
import{ApStudentsComponent} from './ap-students/ap-students.component';
// import {CompanyLoginComponent} from './company-login/company-login.component';
export const router: Routes=[
    {path:'MainComponent' ,component:MainComponent},
    {path: 'AdminLoginComponent' , component : AdminLoginComponent },
    {path: 'AdminSignUpComponent',component:AdminSignUpComponent},
    {path: 'AdminDashboardComponent',component:AdminDashboardComponent,
children:[
    {path:'AllStudComponent',component:AllStudComponent},
    {path:'AllJobsComponent',component:AllJobsComponent}, 
    {path: 'AllComComponent',component:AllComComponent},   
]},
    {path: 'StudentLoginComponent' , component : StudentLoginComponent },
    {path: 'CompanyLoginComponent' , component : CompanyLoginComponent},
    {path: 'StudentDashboardComponent' , component : StudentDashboardComponent,
children:[
    {path:"EditDetailsComponent",component: EditDetailsComponent},
    {path:'AllJobsComponent',component:AllJobsComponent},
    {path: 'AllComComponent',component:AllComComponent},
    
    ]
},
    
    {path: 'StudSignUpComponent',component: StudSignUpComponent},
    {path: 'CompanySignUpComponent',component: CompanySignUpComponent},
    {path: 'CompanyDashboardComponent',component: CompanyDashboardComponent,
children:[
    {path:'StudentDashboardComponent/postJobComponent',component:PostJobsComponent},
    {path:"AllStudComponent",component:AllStudComponent},
    {path:'CurComJobComponent',component:CurComJobComponent},
    {path:'ApStudentsComponent',component:ApStudentsComponent},
    
    ]},  
];

export const Routing = RouterModule.forRoot(router);
