import { Component } from '@angular/core';
import { AppointmentsService } from '../appointments.service';
import { doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {
  constructor(private service:DoctorService, private route:ActivatedRoute,){}
  doctor:any;
  addtoDoctor(doc:doctor){
    this.doctor.addtoCart(doc);
    alert("your appointment is added")

  }

  // ngOnInit(){
  //     this.appointments.getItems().subscribe((result)=>{
  //    this.doctor=result;
  //    console.log(this.doctor);
  // })


  doctorSpecialty: any;
  doctorTime: any;

  ngOnInit(): void{
    const doctorId = this.route.snapshot.params['id'];
    this.doctor=this.service.getDoctorById(doctorId)||null;
  }
  submitForm(){
    swal({
      title: "Good job!",
      text: "Your appointment is Booked",
      icon: "success",
    });
  }
 }

  


