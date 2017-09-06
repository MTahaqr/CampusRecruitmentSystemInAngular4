import { Component, OnInit } from '@angular/core';
import {CurComJobComponent} from '../cur-com-job/cur-com-job.component'

@Component({
  selector: 'app-ap-students',
  templateUrl: './ap-students.component.html',
  styleUrls: ['./ap-students.component.css']
})
export class ApStudentsComponent implements OnInit {
  stud=[];
  constructor(public CurComJobComponent:CurComJobComponent) { }

  ngOnInit() {
    this.stud.length=0;
    this.stud = this.CurComJobComponent.applyStudList;
    console.log("this.stud",this.stud);
  }

}
