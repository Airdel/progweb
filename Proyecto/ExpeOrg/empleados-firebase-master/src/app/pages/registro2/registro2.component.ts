import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup ,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsultasService } from 'src/app/services/consultas.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.component.html',
  styleUrls: ['./registro2.component.css']
})
export class Registro2Component implements OnInit {
  createConsulta: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Consulta'

  constructor(private fb: FormBuilder,
    private _ConsultasService: ConsultasService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.createConsulta = this.fb.group({    
      numsc: ['', Validators.required],
      peso: ['', Validators.required],
      altura: ['', Validators.required],
      pa: ['', Validators.required],
      padecimiento: ['', Validators.required],
      medicacion: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)    
     }

  ngOnInit(): void {
     this.esEditar();
  }

  agregarEditarConsulta() {
    this.submitted = true;

    if (this.createConsulta.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarConsulta();
    } else {
      this.editarConsulta(this.id);
    }
    
  }

    agregarConsulta() {
    const consulta: any = {
      numsc: this.createConsulta.value.numsc,
      peso: this.createConsulta.value.peso,
      altura: this.createConsulta.value.altura,
      pa: this.createConsulta.value.pa,
      padecimiento: this.createConsulta.value.padecimiento,
      medicacion: this.createConsulta.value.medicacion,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
      }
      
    this.loading = true;
    this._ConsultasService.agregarConsultas(consulta).then(() => {
      this.toastr.success('La consulta fue registrada con éxito!', '¡Consulta Registrada!', {
        positionClass: 'toast-bottom-right'
      });
      this.loading = false;
      this.router.navigate(['/search']);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

    editarConsulta(id: string) {

    const consulta: any = {
      numsc: this.createConsulta.value.numsc,
      peso: this.createConsulta.value.peso,
      altura: this.createConsulta.value.altura,
      pa: this.createConsulta.value.pa,
      padecimiento: this.createConsulta.value.padecimiento,
      medicacion: this.createConsulta.value.medicacion,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()      
    }

    this.loading = true;
    this._ConsultasService.actualizarConsulta(id, consulta).then(() => {
      this.loading = false;
      this.toastr.info('La consulta fue modificada con éxito', '¡Consulta modificada!', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/search']);
    })
  }

  esEditar() {
    this.titulo = 'Editar Paciente'
    if (this.id !== null) {
      this.loading = true;
      this._ConsultasService.getConsulta(this.id).subscribe(data => {
        this.loading = false;
        this.createConsulta.setValue({
          numsc: data.payload.data()['numsc'],
          peso: data.payload.data()['peso'],
          altura: data.payload.data()['altura'],
          pa: data.payload.data()['pa'],
          padecimiento: data.payload.data()['padecimiento'],
          medicacion: data.payload.data()['medicacion']
        })
      })
    }
  }

  
}

  

  
  
