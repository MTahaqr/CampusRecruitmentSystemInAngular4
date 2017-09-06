import { Component, OnInit } from '@angular/core';
import {StudentService} from '../Services/student.service';
import {AdminService} from '../Services/admin.service';


@Component({
  selector: 'app-all-stud',
  templateUrl: './all-stud.component.html',
  styleUrls: ['./all-stud.component.css']
})
export class AllStudComponent implements OnInit {

  allStud=[];
  allStudsKey=[];
  userType=false;
  constructor(public studService:StudentService ,public adSer:AdminService) { }

  ngOnInit() {
    this.allStud.length=0;
    this.allStudsKey.length=0;
    if(this.adSer.user=='Admin')
    {
      // console.log("Chalaaaaaaaaaaaaaaa!!!!!!!!!!!!!!")
      this.userType=true;
    }
    this.allStud=this.studService.showAllStud();
    this.allStudsKey=this.studService.allStudsKeys();

     console.log("this.allStudsKey",this.allStudsKey);
  }
  toRemove(index){
    this.studService.toRemoveStud(this.allStudsKey[index]);
    this.allStud=this.studService.showAllStud();
    this.allStudsKey=this.studService.allStudsKeys();
    console.log("this.allStud[index]",this.allStudsKey[index]);

  }

}
