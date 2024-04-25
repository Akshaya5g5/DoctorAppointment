import { Injectable } from '@angular/core';
import { doctor } from './doctor';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor() { }

  doctor: doctor[] = [];
  addtoCart(doctor:doctor){
    this.doctor.push(doctor);
  }
  getItems(){
    return of(this.doctor);
  }
  getLength(){
    return this.doctor.length;

  }
  addDoctor(doctor: doctor){
    this.doctor.push(doctor);
}

 

 
  }

 






