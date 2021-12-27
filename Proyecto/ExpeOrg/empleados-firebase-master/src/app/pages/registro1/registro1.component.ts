import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DoctoresService } from 'src/app/services/doctores.service';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-registro1',
  templateUrl: './registro1.component.html',
  styleUrls: ['./registro1.component.css']
})
export class RegistroComponent1 implements OnInit {
createPaciente: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Paciente'

  constructor(private fb: FormBuilder,
    private _PacientesService: PacientesService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.createPaciente = this.fb.group({
      nombre: ['', Validators.required],
      apppat: ['', Validators.required],      
      appmat: ['', Validators.required],      
      numsc: ['', Validators.required],
      correo: ['', Validators.required],
      fecha: ['', Validators.required],
      curp: ['', Validators.required],
      contrasena: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)    
     }

  ngOnInit(): void {
     this.esEditar();
  }

  agregarEditarPaciente() {
    this.submitted = true;

    if (this.createPaciente.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarPaciente();
    } else {
      this.editarPaciente(this.id);
    }

  }

    agregarPaciente() {
    const doctor: any = {
      nombre: this.createPaciente.value.nombre,
      apppat: this.createPaciente.value.apppat,
      appmat: this.createPaciente.value.appmat,
      numsc: this.createPaciente.value.numsc,
      correo: this.createPaciente.value.correo,
      fecha: this.createPaciente.value.fecha,
      curp: this.createPaciente.value.curp,
      contrasena: this.createPaciente.value.contrasena,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
      }
      
    this.loading = true;
    this._PacientesService.agregarPaciente(doctor).then(() => {
      this.toastr.success('El Paciente fue registrado con exito!', 'Paciente Registrado', {
        positionClass: 'toast-bottom-right'
      });
      this.loading = false;
      this.router.navigate(['/search']);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

    editarPaciente(id: string) {

    const paciente: any = {
  nombre: this.createPaciente.value.nombre,
      apppat: this.createPaciente.value.apppat,
      appmat: this.createPaciente.value.appmat,
      numsc: this.createPaciente.value.numsc,
      correo: this.createPaciente.value.correo,
      fecha: this.createPaciente.value.fecha,
      curp: this.createPaciente.value.curp,
      contrasena: this.createPaciente.value.contrasena,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()      

    }

    this.loading = true;

    this._PacientesService.actualizarPaciente(id, paciente).then(() => {
      this.loading = false;
      this.toastr.info('El Paciente fue modificado con exito', 'Paciente modificado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/search']);
    })
  }


  esEditar() {
    this.titulo = 'Editar Paciente'
    if (this.id !== null) {
      this.loading = true;
      this._PacientesService.getPaciente(this.id).subscribe(data => {
        this.loading = false;
        this.createPaciente.setValue({
          nombre: data.payload.data()['nombre'],
          apppat: data.payload.data()['apppat'],        
          appmat: data.payload.data()['appmat'],
          numsc: data.payload.data()['numsc'],
          correo: data.payload.data()['correo'],
          fecha: data.payload.data()['fecha'],
          curp: data.payload.data()['curp'],
          contrasena: data.payload.data()['cotrasena']
        })
      })
    }
  }

  
}

  

  
  
