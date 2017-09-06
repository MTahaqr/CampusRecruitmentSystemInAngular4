import { Component, OnInit } from '@angular/core';
import {AdminService} from '../Services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  userType;
  constructor(public adSer:AdminService) { }

  ngOnInit() {
    if(this.adSer.user=='Admin')
    {
      this.userType=true;
    }
    console.log("this.adSer.user",this.adSer.user);
    
  }
  logOut(){
    this.adSer.logOut();
  }

}
