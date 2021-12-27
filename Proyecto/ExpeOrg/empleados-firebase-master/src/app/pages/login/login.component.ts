import { Component, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/models/doctor.model';
import { usuarioModel } from 'src/app/models/usuario.model';
import { DoctoresService } from 'src/app/services/doctores.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PacienteModel } from 'src/app/models/paciente.model';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  

  ngOnInit() {
  
      
  }



}