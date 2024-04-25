import { Component } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrl: './addprofile.component.css'
})
export class AddprofileComponent {
  doctorName: any;
  doctorSpecialty: any;
  doctorTime: any;
  doctorDate: any;
  doctorImage: any;
  newDoctor:any;
  doctorId: any;
  constructor(private service:DoctorService, private router:Router){
  }
  addDoctor(){
    this.newDoctor={
      doctorId:this.doctorId,
      doctorName:this.doctorName,
     doctorSpecialty: this.doctorSpecialty,
     doctorTime:this.doctorTime,
     doctorDate:this.doctorDate,
     doctorImage:this.doctorImage
    }
    this.service.addDoctor(this.newDoctor);
    this.router.navigateByUrl("/doctor/book");

  }


}
