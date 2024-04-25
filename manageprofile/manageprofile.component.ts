import { Component } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-manageprofile',
  templateUrl: './manageprofile.component.html',
  styleUrl: './manageprofile.component.css'
})
export class ManageprofileComponent {

  constructor(private service: DoctorService){}

  delete(p:any){
    this.service.deletedoctor(p);
    alert("Doctor Details Deleted succlessfully");
   
  }
   toSave(p:any){
    p.doctorEdit=false;
    this.service.updatedoctor(p);
    alert("Doctor Details update successfully");

  }
  toUpdate(p:any){
    p.doctorEdit=true;
  }
  doctor:any;
  ngOnInit(){
    this.service.getDoctor().subscribe((res)=>{
      this.doctor=res;
    });
  }

}
