import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../Services/company.service';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {

  constructor(private comService:CompanyService) { }

  ngOnInit() {
  }
   LogOut(){
    this.comService.LogOut();
  }

}
