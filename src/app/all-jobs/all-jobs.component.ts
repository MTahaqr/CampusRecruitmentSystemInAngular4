import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../Services/company.service';
import {AdminService} from '../Services/admin.service';
import {StudentService} from '../Services/student.service';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {

jobsArray =[];
jobKeys=[];
forAdmin=false;
forStud=false;
  constructor(public comService: CompanyService ,public adSer:AdminService,public studSer: StudentService) { }

  ngOnInit() {
    this.jobsArray.length=0;
    console.log("this.jobsArray",this.jobsArray);
    this.jobsArray= this.comService.alljobs();
    this.jobKeys=this.comService.arrayKey();
    
    if(this.adSer.user=='Admin')
    {
      this.forAdmin=true;
    }
    if(this.studSer.user=="student")
    {
      this.forStud=true;
    }
  }
applyjob(index){
  this.comService.checkApply(index);
}

  toRemove(index){
    // this.jobKeys[index];
    // console.log("this.jobKeys[index]",this.jobKeys[index]);
     this.comService.toRemoveJob(this.jobKeys[index]);
     this.jobsArray= this.comService.alljobs();
    this.jobKeys=this.comService.arrayKey();
}
toApply(i){
  this.comService.apply();
  this.comService.applyStudsWrite(i);
}

}
