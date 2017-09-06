import { Component, OnInit } from '@angular/core';
import {StudentService} from '../Services/student.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

   form={
    Name: "",
    Semester: "",
    CGPA: "",
    Phone: "",
    Program: "",
  }
  constructor(public studentServices:StudentService) { }

  ngOnInit() {
  }
   save(){
    this.studentServices.save(this.form);
    this.form={
    Name: "",
    Semester: "",
    CGPA: "",
    Phone: "",
    Program: "",
  }
  }

}
