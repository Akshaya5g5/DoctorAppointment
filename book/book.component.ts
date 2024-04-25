import { Component } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

import { doctor } from '../services/doctor';
import { AppointmentsComponent } from '../services/appointments/appointments.component';
import { AppointmentsService } from '../services/appointments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  constructor(private service:DoctorService, private appointment:AppointmentsService,private router:Router ){}
   doctor:any;

    addtoDoctor(doctor:doctor){
    this.appointment.addtoCart(doctor);
    alert("appointment has been booked")

 }
  doctorSpecialty: any;
  doctorTime: any;
  showBookNow=false;
  
  bookNow(d:any){
   this.router.navigate(['/patient/appointments',d])

  }


ngOnInit(){ 
  this.service.getDoctor().subscribe((result)=>{
    this.doctor=result;
    console.log(this.doctor);
  })
}





}
