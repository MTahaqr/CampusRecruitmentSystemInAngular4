import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/Database';
import { Router } from '@angular/router';

@Injectable()
export class AdminService {
  adminSignUp: FirebaseObjectObservable<any>;
  adminSignIn: FirebaseObjectObservable<any>;
  user='unKnown';
  constructor(private afAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) { }

  signUp(adminSignUpForm) {
    this.afAuth.auth.createUserWithEmailAndPassword(adminSignUpForm.Email, adminSignUpForm.Password)
      .then((currentUser) => {
        localStorage.setItem("currentUser.uid", currentUser.uid);
        console.log(currentUser.uid)
        alert("Sign Up Success")
         this.adminSignUp = this.db.object('/Admin/SignUpDetails/' + currentUser.uid);
        this.adminSignUp.set({ adminSignUpForm });
        this.router.navigateByUrl('/AdminDashboardComponent');
      })
      .catch(function (error) {
        // Handle Errors here.
        alert(error);
        console.log("error", error);
      }
      )
    // form="";

  }
  SignIn(adminSignInForm){
   this.afAuth.auth.signInWithEmailAndPassword(adminSignInForm.Email, adminSignInForm.Password)
   .then(
        (success) => {
          console.log("success.uid",success.uid);
          const key= localStorage.setItem("currentUser.uid",success.uid)
           this.adminSignIn = this.db.object('/Admin/SignUpDetails/'+success.uid+'/adminSignUpForm', { preserveSnapshot: true });
          this.adminSignIn.subscribe(snapshot => {
          console.log(snapshot.key)
          console.log(snapshot.val())
          this.user=snapshot.val().user
          console.log("this.user",this.user)
          console.log("this.user 2",this.user)
          if(this.user=="Admin")
          {
             this.router.navigate(['/AdminDashboardComponent']);
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
   logOut(){
    this.afAuth.auth.signOut()
    .then((successFull)=>{
      this.router.navigateByUrl('/AdminLoginComponent');
    })
    .catch(function(error){
      alert(error);
    })
  }
}
