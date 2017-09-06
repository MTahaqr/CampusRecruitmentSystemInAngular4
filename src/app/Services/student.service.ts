import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/Database';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
@Injectable()
export class StudentService {
  studentDetails: FirebaseObjectObservable<any>;
  studentSignInDetails: FirebaseObjectObservable<any>;
  // applyStudents: FirebaseObjectObservable<any>;
  
  user="unKnown";
  studs=[];
  studsKey=[];
  
  
  // user: Observable<firebase.User>;
  constructor(private afAuth:AngularFireAuth, private router: Router,private db:AngularFireDatabase ) {
    this.studentDetails = db.object('/studentDetails');
    // this.user = this.afAuth.authState;
   }

  signUp(studSignUpForm:any){
    // console.log(this.a,this.b);
    this.afAuth.auth.createUserWithEmailAndPassword(studSignUpForm.Email, studSignUpForm.Password)
    .then((currentUser)=>{
      localStorage.setItem("currentUser.uid",currentUser.uid);
      console.log(studSignUpForm)
      alert("Sign Up Success");
      const studentObservable = this.db.object('/students/SignUpDetails/'+currentUser.uid);
    studentObservable.set({studSignUpForm});
      this.router.navigateByUrl('/StudentDashboardComponent');
    })
    .catch(function(error) {
  // Handle Errors here.
  alert(error);
    console.log("error", error);
}
)
// form="";

  }
//   SignIn(form){
//     this.afAuth.authState.subscribe(auth => { 
//       if(auth) {
//         this.router.navigateByUrl('/StudentDashboardComponent');
//       }
//       else{
//          this.afAuth.auth.signInWithEmailAndPassword(form.email, form.password)
//     .then(
//         (success) => {
//         this.router.navigate(['/StudentDashboardComponent'])})
//     .catch(function(error) {
//   // Handle Errors here.
//   alert(error);
//   // ...
// });

//       }
//     });
SignIn(form:any){
   this.afAuth.auth.signInWithEmailAndPassword(form.Email, form.Password)
   .then(
        (success) => {
          console.log("success.uid",success.uid);
          const key= localStorage.setItem("currentUser.uid",success.uid)
           this.studentSignInDetails = this.db.object('/students/SignUpDetails/'+success.uid+'/studSignUpForm', { preserveSnapshot: true });
          this.studentSignInDetails.subscribe(snapshot => {
          console.log(snapshot.key)
          console.log(snapshot.val())
          this.user=snapshot.val().user
          console.log("this.user",this.user)
          console.log("this.user 2",this.user)
          if(this.user=="student")
          {
             this.router.navigate(['/StudentDashboardComponent']);
          }
          else{
            alert("Sorry,you are not a Student");
          }
});
       })
    .catch(function(error) {
  // Handle Errors here.
  alert(error);
})


   
  }

  LogOut(){
    this.afAuth.auth.signOut()
    .then((successFull)=>{
      this.router.navigateByUrl('/StudentLoginComponent');
    })
    .catch(function(error){
      alert(error);
    })
  }

  save(studDetForm:any){
    const key= localStorage.getItem("currentUser.uid");
    console.log("key",key);
    const studentObservable = this.db.object('/students/StudDet/'+key);
    studentObservable.update({studDetForm}); 
  }
  
  isLogIn(){
    this.afAuth.authState.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/StudentDashboardComponent');
      }})

  }
  showAllStud():String[]{
    const allStud = this.db.object('students/StudDet/', { preserveSnapshot: true });
   
    allStud.subscribe(snapshot => {
       this.studs.length=0;
    this.studsKey.length=0;
      snapshot.forEach(element => {
      // console.log("element.key",element.key)
      this.studsKey.push(element.key)
        
        element.forEach(data=>{
        //  console.log("data.val()",data.val());

         this.studs.push(data.val());
        })
      });
      console.log("this.studsKey",this.studsKey)
      console.log("this.studs",this.studs)
      // console.log(snapshot.val())
    });
     return this.studs
}
allStudsKeys():string[]{
  return this.studsKey;
}
toRemoveStud(id){
  this.db.object('students/StudDet/'+id).remove();
  this.db.object('students/SignUpDetails/'+id).remove();
}

// apply(){
//   const key= localStorage.getItem("currentUser.uid");
//   console.log("key",key);
//   const applyStudents=this.db.object('students/StudDet/'+key, { preserveSnapshot: true });
//   applyStudents.subscribe(snapshot=>{
//     snapshot.forEach(data=>{
//     console.log("data.val()data.val()",data.val());
        
//     })
//   })
  
// }


  
}