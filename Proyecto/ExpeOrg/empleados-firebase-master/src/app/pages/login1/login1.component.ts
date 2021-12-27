import { Component, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/models/doctor.model';
import { usuarioModel } from 'src/app/models/usuario.model';
import { DoctoresService } from 'src/app/services/doctores.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PacienteModel } from 'src/app/models/paciente.model';
import { PacientesService } from 'src/app/services/pacientes.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
title ='Firebase-Angular-Login1';
isSignedIn = false
constructor(public firebaseService : FirebaseService){}
ngOnInit(){
  if(localStorage.getItem('user')!== null)
  this.isSignedIn= true
  else
  this.isSignedIn = false
}
async onSignup(email:string,password:string){
  await this.firebaseService.signup(email,password)
  if(this.firebaseService.isLoggedIn)
  this.isSignedIn = true
}
async onSignin(email:string,password:string){
  await this.firebaseService.signin(email,password)
  if(this.firebaseService.isLoggedIn)
  this.isSignedIn = true
}
handleLogout(){
  this.isSignedIn = false

}

}
