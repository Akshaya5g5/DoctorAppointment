import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:any;
  password:any;
  user:any;
  constructor (private router:Router){}
    checkLogin(){
       if(this.validatePassword()){
        this.user={
          "username":this.username,
          "password":this.password
      };
       console.log("success")
       localStorage.setItem("logedInuser",JSON.stringify(this.user));
       this.router.navigateByUrl('/doctor/home');
      }
       else if(this.password=="1234"){
         this.router.navigateByUrl('/patient/home');
       }
      }
    
    validatePassword(){
      var reqpwd=this.username.substring(0,3)+"123";
      if(reqpwd==this.password){
        return true;
      }
      else{
        return false;
      }
    }
  }


