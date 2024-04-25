import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppointmentsService } from '../services/appointments.service';

@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrl: './patientdashboard.component.css'
})
export class PatientdashboardComponent {
  username:any;
  user:any;
  doctor:any;
  constructor(private router:Router ,private  service:AppointmentsService){}
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
  ngDoCheck(){
    this.doctor = this.service.getLength();
  }
  

}



