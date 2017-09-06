import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../Services/company.service';
import {AngularFireDatabase} from 'angularfire2/Database';

@Component({
  selector: 'app-post-jobs',
  templateUrl: './post-jobs.component.html',
  styleUrls: ['./post-jobs.component.css']
})
export class PostJobsComponent implements OnInit {

  jobDetForm={
    title:"",
    salary:"",
    description:"",
  }
  
  constructor(public comService: CompanyService , public db:AngularFireDatabase) { }
  
  
  ngOnInit() {
  }
  postJob(){
  this.comService.postJob(this.jobDetForm);
  this.jobDetForm={
    title:"",
    salary:"",
    description:"",
  };
    
}

}
