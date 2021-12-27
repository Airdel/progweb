import { Component, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/models/doctor.model';
import { usuarioModel } from 'src/app/models/usuario.model';
import { DoctoresService } from 'src/app/services/doctores.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PacienteModel } from 'src/app/models/paciente.model';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  usuario: usuarioModel = new usuarioModel();
  doctor: DoctorModel[] = [];
  paciente: PacienteModel[] = [];

  correo1!: string;
  password1!: string;
  id!: string;
  constructor(private doctoresService:DoctoresService, private router:Router ) { }


  acceder(form:NgForm) { 
   
for(var i = 0; i < this.doctor.length; i++){             
        if(this.correo1 == this.doctor[i].correo && this.password1 == this.doctor[i].contrasena){
          console.log("Doctor encontrado");
          this.id = this.doctor[i].id;
          this.router.navigate(['/search/'+this.id]);
          return;
        }
    }

  }
  

  ngOnInit() {
    this.doctoresService.mostrarDoctor()
      .subscribe(resp => {
        console.log(resp);
        this.doctor = resp;
      });

  }

}
