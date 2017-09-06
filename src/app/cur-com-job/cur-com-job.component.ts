import { Component, OnInit } from '@angular/core';
import{CompanyService} from '../Services/company.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cur-com-job',
  templateUrl: './cur-com-job.component.html',
  styleUrls: ['./cur-com-job.component.css']
})
export class CurComJobComponent implements OnInit {
 
  curUserJob=[];
  curJobKey=[];
  applyStudList=[];
  closeResult: string;
  constructor(public comSer:CompanyService , private modalService: NgbModal) { }

  ngOnInit() {
    this.curUserJob.length=0;
    this.curJobKey.length=0;
    this.curUserJob = this.comSer.retCurComjobs();
    // this.curJobKey=this.comSer.retCurComjobsKey();
    // console.log("this.curJobKey[1]",this.curJobKey[1]);
  }
  //  open(content) {
  //   this.modalService.open(content,{windowClass:"dark-modal"})
  //   // .then((result) => {
  //   //   this.closeResult = `Closed with: ${result}`;
  //   // }, (reason) => {
  //   //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   // });
  // }
   open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  applyStudents(index){
    this.applyStudList.length=0;
    this.applyStudList=this.comSer.applyStudRead(index);
    console.log("this.applyStudList",this.applyStudList)
    
  }
  


}
