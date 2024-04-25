import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { BookComponent } from './book/book.component';

import { AddprofileComponent } from './addprofile/addprofile.component';
import { ManageprofileComponent } from './manageprofile/manageprofile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientdashboardComponent,
    DoctordashboardComponent,
    HomeComponent,
    ViewComponent,
    BookComponent,
    
    AddprofileComponent,
    ManageprofileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
