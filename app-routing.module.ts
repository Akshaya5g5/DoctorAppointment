import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { BookComponent } from './book/book.component';

import { AppointmentsComponent } from './services/appointments/appointments.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { ManageprofileComponent } from './manageprofile/manageprofile.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
 {path:'patient',component:PatientdashboardComponent,
 children : [
    
  {path:'home', component:HomeComponent},
  {path:'view',component:ViewComponent},
  {path:'book',component:BookComponent},
  
  {path:'appointments/:Id',component:AppointmentsComponent},
  {path:'',component:LoginComponent}
 ]
},
{path:'',component:LoginComponent},
{path:'doctor',component:DoctordashboardComponent,
children : [
  {path:'home', component:HomeComponent},
  {path:'appointments/:id',component:AppointmentsComponent},
  {path:'addprofile',component:AddprofileComponent},
  {path:'manageprofile',component:ManageprofileComponent},
  {path:'',component:LoginComponent},


]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
