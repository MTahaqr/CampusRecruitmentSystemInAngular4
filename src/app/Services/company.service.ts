import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable } from 'angularfire2/Database';
import { Router } from '@angular/router';

@Injectable()
export class CompanyService {
  companyDetails: FirebaseObjectObservable<any>;
  comSignInDetails: FirebaseObjectObservable<any>;
  comSignUpDet: FirebaseObjectObservable<any>;
  applyStud: FirebaseListObservable<any>;
  user = "unKnown";
  jobs=[];
  jobKeys=[];
  curComJobs=[];
  curComJobKeys=[];
  applyJobKey=[];
  
  allComs=[];
  allComKeys=[];
  studObject={
    Name: "",
    Semester: "",
    CGPA: "",
    Phone: "",
    Program: "",
  };
  applyStudArray=[];

  constructor(private afAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    this.companyDetails = db.object('/Company/');
  }
  signUp(comSignUpForm: any) {
    // console.log(this.a,this.b);
    this.afAuth.auth.createUserWithEmailAndPassword(comSignUpForm.Email, comSignUpForm.Password)
      .then((currentUser) => {
        localStorage.setItem("currentUser.uid", currentUser.uid);
        console.log(currentUser.uid)
        alert("Sign Up Success")
        const comObservable = this.db.object('/Company/SignUpDetails/' + currentUser.uid);
        comObservable.set({ comSignUpForm });
        this.router.navigateByUrl('/CompanyDashboardComponent');
      })
      .catch(function (error) {
        // Handle Errors here.
        alert(error);
        console.log("error", error);
      }
      )
    // form="";

  }

  SignIn(comSignInForm: any) {
    this.afAuth.auth.signInWithEmailAndPassword(comSignInForm.Email, comSignInForm.Password)
      .then(
      (success) => {
        console.log("success", success.uid)
        //  const key= localStorage.getItem("currentUser.uid")
        localStorage.setItem("currentUser.uid", success.uid)
        this.comSignInDetails = this.db.object('/Company/SignUpDetails/' + success.uid + '/comSignUpForm', { preserveSnapshot: true });
        this.comSignInDetails.subscribe(snapshot => {
          console.log("snapshot.key", snapshot.key)
          console.log("snapshot.val()", snapshot.val().user)
          this.user = snapshot.val().user
          console.log("this.user", this.user)
          if (this.user == "company") {
            this.router.navigate(['/CompanyDashboardComponent']);
          }
          else {
            alert("Sorry,you don't have company account");
          }
        });
      })
      .catch(function (error) {
        // Handle Errors here.
        alert(error);
      })

    //    this.afAuth.auth.signInWithEmailAndPassword(comSignInForm.Email, comSignInForm.Password)
    //    .then(
    //         (success) => {
    //         this.router.navigate(['/StudentDashboardComponent'])})
    //     .catch(function(error) {
    //   // Handle Errors here.
    //   alert(error);
    // })



  }

  LogOut() {
    this.afAuth.auth.signOut()
      .then((successFull) => {
        this.router.navigateByUrl('/CompanyLoginComponent');
      })
    // .catch(function(error){
    //   alert(error);
    // })
  }

  // save(comDetForm: any) {
  //   const key = localStorage.getItem("currentUser.uid");
  //   const studentObservable = this.db.object('/companyDetails/' + key);
  //   studentObservable.update({ comDetForm });
  // }

  isLogIn() {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/StudentDashboardComponent');
      }
    })

  }

  postJob(postJobForm) {
    const key = localStorage.getItem("currentUser.uid");
    const jobObservable = this.db.list('/Company/JobsDetails/' + key+'/');
    jobObservable.push({ postJobForm });
    console.log(localStorage.getItem('currentUser.uid'))
  }

  
  alljobs():string[] {
    const allJobs = this.db.object('/Company/JobsDetails/', { preserveSnapshot: true });
    
    allJobs.subscribe(snapshot => {
    this.jobs.length=0;
    this.jobKeys.length=0;      
      snapshot.forEach(element1 => {
        element1.forEach(element2=>{ 
          console.log("element2.key",element2.key);
          this.applyJobKey.push(element2.key);
          this.jobKeys.push(element1.key+'/'+element2.key); 
          console.log(this.applyJobKey);
          element2.forEach(data1=>{
            this.jobs.push(data1.val());
          })
        //  this.jobs.push(element2.val());
        })
      });
    });
     return this.jobs

     
  }
  arrayKey():string[]{
       return this.jobKeys;
     }
     toRemoveJob(key){
       this.db.object('/Company/JobsDetails/'+key).remove();
     }
  //
  retCurComjobs():string[] {
    var key= localStorage.getItem('currentUser.uid');
    const cCJobs = this.db.object('/Company/JobsDetails/'+key, { preserveSnapshot: true });
     this.curComJobs.length=0;
     this.curComJobKeys.length=0;
    // this.jobKeys.length=0;
    cCJobs.subscribe(snapshot => {
      snapshot.forEach(element1 => {
          // console.log("element1.key",element1.key);
          this.curComJobKeys.push(element1.key)
          console.log("this.curComJobKeys",this.curComJobKeys)
        
        element1.forEach(element2=>{
          this.curComJobs.push(element2.val());
        // console.log(element2.val());
          
        })
      });
    });
     return this.curComJobs;
}
// retCurComjobsKey():string[]{
//   return this.curComJobKeys;
// }

allComDet():string[]{
  this.allComs.length=0;
  this.allComKeys.length=0;
       this.comSignUpDet=this.db.object('/Company/SignUpDetails/', { preserveSnapshot: true });
       this.comSignUpDet.subscribe(snapshot=>{
         snapshot.forEach(level1=>{
          //  console.log("level1.key",level1.key);
            this.allComKeys.push(level1.key)
           level1.forEach(level2=>{
          //  console.log("level2.val()",level2.val());
          this.allComs.push(level2.val());
              
           })
           
         })
       })
        return this.allComs;
     }
  delCom(index){
     var key=this.allComKeys[index];
    this.db.object('/Company/SignUpDetails/'+key).remove();
    this.db.object('/Company/JobsDetails/'+key).remove();
}
apply(){
  const key= localStorage.getItem("currentUser.uid");
  console.log("key",key);
  const applyStudents=this.db.object('students/StudDet/'+key, { preserveSnapshot: true });
  applyStudents.subscribe(snapshot=>{
    snapshot.forEach(data=>{
      this.studObject=data.val()
    console.log("this.studObject",this.studObject);
    console.log("indexindexindexindex");

        
    })
  })
  
}

applyStudsWrite(index){
  const keys=this.applyJobKey[index];
  // console.log("keys",keys);
  // //  this.applyStud=this.db.list('Company/AppliedStudents/'+keys, { preserveSnapshot: true });
  // // this.applyStud.push(this.studObject);
}
checkApply(index){
  const readKeys= this.applyJobKey[index];
  var TrF="false";
  console.log("this.applyJobKey[index]",this.applyJobKey[index]);
   const applyStudReads=this.db.object('Company/AppliedStudents/'+readKeys, { preserveSnapshot: true });
    applyStudReads.subscribe(snapshot=>{
      if(snapshot.val()==null)
      {
        TrF="true"
      }
    snapshot.forEach(level1=>{
      console.log("level1.val().Name",level1.val().Name);
    if(level1.val().Name==this.studObject.Name)
    {
      TrF= "false";
      console.log("TrF",TrF);
    }
    else
    TrF="true"
  })
  })
  
    if(TrF=="true"){
        this.applyStud=this.db.list('Company/AppliedStudents/'+readKeys, { preserveSnapshot: true });
        this.applyStud.push(this.studObject);
      console.log("chalaaaaaaaaaaaaa");
    }
    else{
      alert("you have alread applied for the job")
    }
  
  
  
  
}
applyStudRead(index):string[]{
  this.applyStudArray.length=0;
  const readKey= this.curComJobKeys[index];
  const applyStudRead=this.db.object('Company/AppliedStudents/'+readKey, { preserveSnapshot: true });
  applyStudRead.subscribe(snapshot=>{
    snapshot.forEach(level1=>{
      this.applyStudArray.push(level1.val());
      // console.log("level1",level1.val());
    })
  })
  return this.applyStudArray;
}




    

  
}



