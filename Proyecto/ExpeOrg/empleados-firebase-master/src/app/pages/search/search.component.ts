import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConsultasService } from 'src/app/services/consultas.service';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pacientes: any[] = [];
  consultas: any[] = [];

  constructor(private _PacientesService: PacientesService,
              private toastr: ToastrService , private _ConsultasService: ConsultasService) {
  }

  ngOnInit(): void {
    this.getPacientes()
    this.getConsultas()
  }

  getPacientes() {
    this._PacientesService.getPacientes().subscribe(data => {
      this.pacientes = [];
      data.forEach((element: any) => {
        this.pacientes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.pacientes);
    });
  }

   getConsultas() {
    this._ConsultasService.getConsultas().subscribe(data => {
      this.consultas = [];
      data.forEach((element: any) => {
        this.consultas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.consultas);
    });
  }

  eliminarPaciente(id: string) {
    this._PacientesService.eliminarPaciente(id).then(() => {
      console.log('Paciente eliminado con éxito');
      this.toastr.error('El paciente fue eliminado con éxito', '¡Registro eliminado!', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    })
  }

    eliminarConsulta(id: string) {
    this._ConsultasService.eliminarConsulta(id).then(() => {
      console.log('Consulta eliminado con éxito');
      this.toastr.error('La consulta fue eliminado con éxito', '¡Registro eliminado!', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    })
  }


}