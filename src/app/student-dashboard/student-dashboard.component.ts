import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {StudentService} from '../Services/student.service';


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

 
  constructor(public studService:StudentService) { }

  ngOnInit() {
  }
  logOut(){
    this.studService.LogOut();

  }
 

}
