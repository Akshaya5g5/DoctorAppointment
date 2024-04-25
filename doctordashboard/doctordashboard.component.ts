import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrl: './doctordashboard.component.css'
})
export class DoctordashboardComponent {
  username:any;
  user:any;
  constructor(private router:Router){}
  logout(){
   localStorage.removeItem("logedInuser");
   this.router.navigateByUrl('');
  }
  ngOnInit(){
   if(localStorage.getItem("logedInuser")){
     this.username
     this.user=localStorage.getItem("logedInuser");
     this.username=JSON.parse(this.user).username;
   }
   else{
     this.router.navigateByUrl('');
   }
  }


  
  

}



