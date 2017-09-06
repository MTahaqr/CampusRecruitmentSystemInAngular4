import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../Services/company.service';
import {AdminService} from '../Services/admin.service';
@Component({
  selector: 'app-all-com',
  templateUrl: './all-com.component.html',
  styleUrls: ['./all-com.component.css']
})
export class AllComComponent implements OnInit {
  allComArray=[];
  userType=false;

  constructor(public comSer:CompanyService , public adSer:AdminService) {
    if(this.adSer.user=='Admin')
    {
      this.userType=true;
    }
   }

  ngOnInit() {
    this.allComArray.length=0;
    this.allComArray= this.comSer.allComDet();
  }
  delCom(i){
    this.comSer.delCom(i);
    this.allComArray= this.comSer.allComDet();
  }

}
