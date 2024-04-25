import { Injectable } from '@angular/core';
import { doctor } from './doctor';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  updateDoctor(p: any) {
    throw new Error('Method not implemented.');
  }
  deleteDoctor(p: any) {
    throw new Error('Method not implemented.');
  }
  getproducts() {
    throw new Error('Method not implemented.');
  }
  updateProduct(p: any) {
    throw new Error('Method not implemented.');
  }
  deleteProduct(p: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  doctor:doctor[]=[ 
    {

    doctorId:1, 
    doctorName: "Dr. John Smith",
    doctorSpecialty: "Cardiology",
    doctorTime: "09:00 AM - 11:00 AM",
    doctorDate: "2024-05-01",
    doctorImage: "http://www.writergirl.com/wp-content/uploads/2014/11/Doctor-790X1024.jpg",
    doctorType:"cardiology",
    doctorEdit:false
},
{
    doctorId:2, 
    doctorName: "Dr. Emily Johnson",
    doctorSpecialty: "Pediatrics",
    doctorTime: "02:00 PM - 04:00 PM",
    doctorDate: "2024-05-03",
    doctorImage: "https://segurancadotrabalhosempre.com/wp-content/uploads/2016/08/O6T8LS01.jpg",
    doctorType:"Pediatrics",
    doctorEdit:false

},
{
    doctorId:3, 
    doctorName: "Dr. Michael Lee",
    doctorSpecialty: "Dermatology",
    doctorTime: "10:00 AM - 12:00 PM",
    doctorDate: "2024-05-05",
    doctorImage: "https://www.advinohealthcare.com/wp-content/uploads/2020/08/shutterstock_155685458.jpg",
    doctorType:"Dermatology",
    doctorEdit:false
  
},
{
    doctorId:4, 
    doctorName: "Dr. Sarah Adams",
    doctorSpecialty: "Orthopedics",
    doctorTime: "11:00 AM - 01:00 PM",
    doctorDate: "2024-05-07",
    doctorImage: "https://gesund-koeln.de/wp-content/uploads/2020/02/Canva-Doctor-Carrying-Stethoscope.jpg",
    doctorType:"Orthopedics",
    doctorEdit:false
},
{
    doctorId:5, 
    doctorName: "Dr. Jessica Martinez",
    doctorSpecialty: "Neurology",
    doctorTime: "03:00 PM - 05:00 PM",
    doctorDate: "2024-05-09",
    doctorImage: "https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg?w=1380",
    doctorType:"Neurology",
    doctorEdit:false
},
{
    doctorId:6, 
    doctorName: "Dr. David Wilson",
    doctorSpecialty: "Oncology",
    doctorTime: "09:00 AM - 11:00 AM",
    doctorDate: "2024-05-11",
    doctorImage: "https://www.topteny.com/wp-content/uploads/2015/02/doc-1.jpg",
    doctorType:"Oncology",
    doctorEdit:false
},
{
    doctorId:7, 
    doctorName: "Dr. Olivia Brown",
    doctorSpecialty: "Gynecology",
    doctorTime: "01:00 PM - 03:00 PM",
    doctorDate: "2024-05-13",
    doctorImage: "https://tse4.mm.bing.net/th?id=OIP.nilDsRE6nfUvFNaWTiTGRwHaE8&pid=Api&P=0&h=180",
    doctorType:"Gynecology",
    doctorEdit:false
},
{
    doctorId:8, 
    doctorName: "Dr. James Taylor",
    doctorSpecialty: "ENT (Ear, Nose, Throat)",
    doctorTime: "10:00 AM - 12:00 PM",
    doctorDate: "2024-05-15",
    doctorImage: "https://tse3.mm.bing.net/th?id=OIP.JCNMNiuVxjti8hXFbkF_OwHaI3&pid=Api&P=0&h=180",
    doctorType: "ENT (Ear, Nose, Throat)",
    doctorEdit:false
},
{
    doctorId:9, 
    doctorName: "Dr. Emma Clark",
    doctorSpecialty: "Psychiatry",
    doctorTime: "02:00 PM - 04:00 PM",
    doctorDate: "2024-05-17",
    doctorImage: "https://www.pulseheadlines.com/wp-content/uploads/2016/12/jejeje-1.jpg",
    doctorType:"Psychiatry",
    doctorEdit:false
},
{
    doctorId:10, 
    doctorName: "Dr. Benjamin White",
    doctorSpecialty: "Urology",
    doctorTime: "11:00 AM - 01:00 PM",
    doctorDate: "2024-05-19",
    doctorImage: "http://preemploymentscreen.com/wp/wp-content/uploads/2014/11/Medical-Doctor.jpg",
    doctorType:"Urology",
    doctorEdit:false


},
{
    doctorId:11, 
    doctorName: "Dr. Ava Anderson",
    doctorSpecialty: "Rheumatology",
    doctorTime: "03:00 PM - 05:00 PM",
    doctorDate: "2024-05-21",
    doctorImage: "https://healthyworkforceinstitute.com/wp-content/uploads/2020/04/smiling-doctor.jpg",
    doctorType:"Rheumatology",
    doctorEdit:false
    
},
{
    doctorId:12, 
    doctorName: "Dr. Ethan Harris",
    doctorSpecialty: "Endocrinology",
    doctorTime: "10:00 AM - 12:00 PM",
    doctorDate: "2024-05-23",
    doctorImage: "https://tse3.mm.bing.net/th?id=OIP.JCNMNiuVxjti8hXFbkF_OwHaI3&pid=Api&P=0&h=180",
    doctorType: "Endocrinology",
    doctorEdit:false
},
{
    doctorId:13, 
    doctorName: "Dr. Mia Garcia",
    doctorSpecialty: "Allergy & Immunology",
    doctorTime: "01:00 PM - 03:00 PM",
    doctorDate: "2024-05-25",
    doctorImage: "https://img.freepik.com/premium-photo/indian-doctor-wearing-white-coat-with-stethoscope_85574-3676.jpg?w=2000",
    doctorType: "Allergy & Immunology",
    doctorEdit:false
    
},
{
    doctorId:14, 
    doctorName: "Dr. Noah Martinez",
    doctorSpecialty: "Gastroenterology",
    doctorTime: "09:00 AM - 11:00 AM",
    doctorDate: "2024-05-27",
    doctorImage: "http://i.huffpost.com/gen/2348088/images/o-DOCTOR-facebook.jpg",
    doctorType:"Gastroenterology",
    doctorEdit:false
},
{
    doctorId:15, 
    doctorName: "Dr. Isabella Thompson",
    doctorSpecialty: "Nephrology",
    doctorTime: "02:00 PM - 04:00 PM",
    doctorDate: "2024-05-29",
    doctorImage: "https://www.stockvault.net/data/2015/09/01/177580/preview16.jpg",
    doctorType:"Nephrology",
    doctorEdit:false
},
{
    doctorId:16, 
    doctorName: "Dr. Lucas Rodriguez",
    doctorSpecialty: "Pulmonology",
    doctorTime: "11:00 AM - 01:00 PM",
    doctorDate: "2024-05-31",
    doctorImage: "http://2.bp.blogspot.com/-_1pxaPxj--c/TgrAZpKAwVI/AAAAAAAAA-A/9VOY9Bhnsog/s1600/doctor.jpg",
    doctorType:"Pulmonology",
    doctorEdit:false
}
];
getDoctor(){
  return of (this.doctor);

}
addDoctor(doctor: doctor){
    this.doctor.push(doctor);
}

  deletedoctor(prod:doctor){
    let res=this.doctor.findIndex(p=>p.doctorName == prod.doctorName);
    this.doctor.splice(res,1);

}
updatedoctor(prod:doctor){
  let res=this.doctor.findIndex(p=>p.doctorName == prod.doctorName);
  this.doctor.splice(res,1,prod)

}
getDoctorById(dId:any):any{
    for(let d of this.doctor){
        if(d.doctorId==dId){
            return d;
        }

    }
}

  
}
