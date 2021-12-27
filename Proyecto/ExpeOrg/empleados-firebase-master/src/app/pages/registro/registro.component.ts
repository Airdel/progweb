import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DoctoresService } from 'src/app/services/doctores.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  createDoctor: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Doctor'

  constructor(private fb: FormBuilder,
    private _DoctoresService: DoctoresService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.createDoctor = this.fb.group({
      nombre: ['', Validators.required],
      apppat: ['', Validators.required],      
      appmat: ['', Validators.required],      
      cedula: ['', Validators.required],
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

  agregarEditarDoctor() {
    this.submitted = true;

    if (this.createDoctor.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarDoctor();
    } else {
      this.editarDoctor(this.id);
    }

  }

    agregarDoctor() {
    const doctor: any = {
      nombre: this.createDoctor.value.nombre,
      apppat: this.createDoctor.value.apppat,
      appmat: this.createDoctor.value.appmat,
      cedula: this.createDoctor.value.cedula,
      correo: this.createDoctor.value.correo,
      fecha: this.createDoctor.value.fecha,
      curp: this.createDoctor.value.curp,
      contrasena: this.createDoctor.value.contrasena,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
      }
      
    this.loading = true;
    this._DoctoresService.agregarDoctor(doctor).then(() => {
      this.toastr.success('El Doctor fue registrado con exito!', 'Doctor Registrado', {
        positionClass: 'toast-bottom-right'
      });
      this.loading = false;
      this.router.navigate(['/search']);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

    editarDoctor(id: string) {

    const doctor: any = {
  nombre: this.createDoctor.value.nombre,
      apppat: this.createDoctor.value.apppat,
      appmat: this.createDoctor.value.appmat,
      cedula: this.createDoctor.value.cedula,
      correo: this.createDoctor.value.correo,
      fecha: this.createDoctor.value.fecha,
      curp: this.createDoctor.value.curp,
      contrasena: this.createDoctor.value.contrasena,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()      

    }

    this.loading = true;

    this._DoctoresService.actualizarDoctor(id, doctor).then(() => {
      this.loading = false;
      this.toastr.info('El Doctor fue modificado con exito', 'Doctor modificado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/list-empleados']);
    })
  }


  esEditar() {
    this.titulo = 'Editar Doctor'
    if (this.id !== null) {
      this.loading = true;
      this._DoctoresService.getDoctor(this.id).subscribe(data => {
        this.loading = false;
        this.createDoctor.setValue({
          nombre: data.payload.data()['nombre'],
          apppat: data.payload.data()['apppat'],        
          appmat: data.payload.data()['appmat'],
          cedula: data.payload.data()['cedula'],
          correo: data.payload.data()['correo'],
          fecha: data.payload.data()['fecha'],
          curp: data.payload.data()['curp'],
          contrasena: data.payload.data()['cotrasena']
        })
      })
    }
  }

  
}
